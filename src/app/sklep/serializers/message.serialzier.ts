import {Message} from '../models/message';

export class MessageSerialzier {

  constructor() { }

  fromJson(json: any): Message{
    let message = new Message();
    message.fromUser = json.from_user
    message.content = json.content;
    message.userId = json.user;
    message.id = json.id;

    return message;
  }
}
