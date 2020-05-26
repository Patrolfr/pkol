import {Injectable} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {ChatBotComponent} from '../chat-bot/chat-bot.component';

@Injectable()
export class ChatBotOverlayService {

  constructor(private overlay: Overlay) { }

  public overlayRef = this.overlay.create();

  open() {
    // // Returns an OverlayRef which is a PortalHost
    // const overlayRef = this.overlay.create();

    // Create ComponentPortal that can be attached to a PortalHost
    const filePreviewPortal = new ComponentPortal(ChatBotComponent);

    // Attach ComponentPortal to PortalHost
    this.overlayRef.attach(filePreviewPortal);
  }

   close() {
    this.overlayRef.detach();
  }
}
