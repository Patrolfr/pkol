import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../service/message.service';
import {Message} from '../../models/message';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.scss']
})
export class MyMessagesComponent implements OnInit {

  messages: Message[];

  constructor(private messageService: MessageService, private authService: AuthenticationService, private router: Router) {
    this.messages = [];
  }

  ngOnInit(): void {
    if (this.authService.isLogged()) {
      this.messageService.getMessages().subscribe((messages: Message[]) => {
        this.messages = messages;
      })
    } else {
      this.router.navigate(['/login']);
    }
  }
}
