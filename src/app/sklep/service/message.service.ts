import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message} from '../models/message';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MessageSerialzier} from '../serializers/message.serialzier';

const MESSAGE_URL = 'http://137.135.245.109:8000/users/messages/'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[];
  constructor(private http: HttpClient) { }


  sendMessage(message: Message): Observable<Object>{
    return this.http.post(MESSAGE_URL,message);
  }

  getMessages(){
    let messageSerialzier = new MessageSerialzier();
    this.messages = [];
    return this.http.get<Message[]>(MESSAGE_URL).pipe(map(result => {
      result.forEach(value => {
        this.messages.push(messageSerialzier.fromJson(value));
      });
      return this.messages;
    }));
  }

}
