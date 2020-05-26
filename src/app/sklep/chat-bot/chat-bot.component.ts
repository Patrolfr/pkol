import {Component} from '@angular/core';
import {ChatBotOverlayService} from '../service/chat-bot-overlay.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss'],

})
export class ChatBotComponent {

  constructor(
    private chatBot: ChatBotOverlayService
  ) { }

  close() {
    this.chatBot.close();
  }
}

