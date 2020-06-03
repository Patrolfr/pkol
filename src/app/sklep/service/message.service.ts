import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import {Message} from '../models/message';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MessageSerialzier} from '../serializers/message.serialzier';
import {SERVER_ADDRESS} from './data.service';

const MESSAGE_URL = SERVER_ADDRESS + '/users/messages/';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[];
  constructor(private http: HttpClient,private handler: HttpBackend) { }


  sendMessage(message: Message): Observable<Object>{
    return this.http.post(MESSAGE_URL, message);
  }

  sendMessageUserNotLogged(message: Message): Observable<any>{
    let customHttpClient = new HttpClient(this.handler);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic c3VwZXI6YXNk');

    return customHttpClient.post(MESSAGE_URL, message, { headers: headers});
  }

  getMessages(){
    const messageSerialzier = new MessageSerialzier();
    this.messages = [];
    return this.http.get<Message[]>(MESSAGE_URL).pipe(map(result => {
      result.forEach(value => {
        this.messages.push(messageSerialzier.fromJson(value));
      });
      return this.messages;
    }));
  }

}
