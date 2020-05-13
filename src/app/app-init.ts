import {KeycloakService} from 'keycloak-angular';
import {environment} from '../environments/environment';
import {DataService} from './sklep/service/data.service';

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

export function initializeCategories(dataService: DataService) {
  return (): Promise<any> => {
    dataService.getProducts();
    dataService.getAllCategories();
    return dataService.getAllSubcategories();
  };
}

export function initializeProducts(dataService: DataService) {
  return (): Promise<any> => {
    return dataService.getProducts();
  };
}


