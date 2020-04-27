import {Component, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private keycloak: KeycloakService,
  ) {
  }

  ngOnInit(): void {
  }

  logout(){
    this.keycloak.logout();
  }

  isUserLoggedIn(): boolean {
    try {
      this.keycloak.getUsername();
      return true;
    }catch (e) {
      return false;
    }
  }
}
