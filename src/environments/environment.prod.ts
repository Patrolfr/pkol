import {KeycloakConfig} from "keycloak-angular";

let keycloakConfig: KeycloakConfig = {
  url: 'http://keycloak-projekt-z-azure-gr2.northeurope.cloudapp.azure.com:8080/auth/',
  realm: 'Sklep',
  clientId: 'sklepClient'
};

export const environment = {
  production: false,
  keycloak: keycloakConfig,
};
