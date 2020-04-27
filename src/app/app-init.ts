import {KeycloakService} from 'keycloak-angular';
import {environment} from '../environments/environment';

export class AppInit {
}

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => keycloak.init({
    config: {
      url: environment.keycloak.url,
      realm: environment.keycloak.realm,
      clientId: environment.keycloak.clientId
    },
    initOptions: {
      onLoad: 'check-sso',
      checkLoginIframe: false
    },
    enableBearerInterceptor: true,
    bearerExcludedUrls: ['/assets', '/clients/public']
  });

}
