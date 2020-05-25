import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message} from '../models/message';
import {Observable} from 'rxjs';

const MESSAGE_URL = 'http://137.135.245.109:8000/users/messages/'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }


  sendMessage(message: Message): Observable<Object>{
    return this.http.post(MESSAGE_URL,message);
  }
}
