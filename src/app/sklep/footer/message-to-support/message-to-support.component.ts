import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {Message} from '../../models/message';
import {MessageService} from '../../service/message.service';
import {Router} from '@angular/router';

const MESSAGE_MIN_LENGTH = 10;

@Component({
  selector: 'app-message-to-support',
  templateUrl: './message-to-support.component.html',
  styleUrls: ['./message-to-support.component.scss']
})

export class MessageToSupportComponent implements OnInit {
  isLogged: boolean;
  userNickName: string;
  userFirstName: string;
  userLastName: string;
  userName: string;
  userEmail: string;
  message: Message;
  isMessageToShort: boolean;
  isError: boolean;
  isSuccess: boolean;
  router: Router;

  constructor(private authService: AuthenticationService, private messageService: MessageService) {
    this.isLogged = this.authService.isLogged();
    this.message = new Message();
    this.isMessageToShort = false;
    this.isError = false;
    this.isSuccess = false;
  }

  ngOnInit(): void {

    if (this.isLogged) {
      this.authService.getUserDetails().subscribe(result => {
        this.userFirstName = result.first_name;
        this.userLastName = result.last_name;
        this.userEmail = result.email;
        this.userNickName = result.username;
      });
    }
  }

  sendMessage() {
    if (this.isLogged) {
      this.message.fromUser = true;
      if (this.message.content.length < MESSAGE_MIN_LENGTH) {
        this.isMessageToShort = true;
        setTimeout(function () {
          this.isMessageToShort = false;
        }.bind(this), 3000);
      } else {
        this.messageService.sendMessage(this.message).subscribe(value => {
          this.message.content = '';
          this.isSuccess = true;
          setTimeout(function () {
            this.isSuccess = false;
          }.bind(this), 5000);
        }, error => {
          this.isError = true;
          setTimeout(function () {
            this.isError = false;
          }.bind(this), 5000);
        });
      }
    } else {
      this.prepareEmail()
    }


  }

  prepareEmail() {

  }
}
