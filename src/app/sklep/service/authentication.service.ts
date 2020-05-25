import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models/user';
import * as jwt_decode from 'jwt-decode';

export const LOGIN_URL = 'http://137.135.245.109:8000/api/token/';
export const REGISTRATION_URL = 'http://137.135.245.109:8000/users/user/';
export const USER_URL = 'http://137.135.245.109:8000/users/user/';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(LOGIN_URL, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.access) {
          const decodedJwt: { token_type: string, exp: number, jti: string, user_id: number } = this.getDecodedAccessToken(user.access);
          user.id = decodedJwt.user_id;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isLogged() {
    return !!localStorage.getItem('currentUser');
  }


  register(user: User) {
    return this.http.post(REGISTRATION_URL, user);
  }

  getUserDetails(): Observable<any> {
    return this.http.get<any>(USER_URL);
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
