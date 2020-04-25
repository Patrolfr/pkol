import {KeycloakConfig} from "keycloak-angular";

let keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth/',
  realm: 'Sklep',
  clientId: 'sklepClient',
  "credentials": {
    "secret": "9f0046eb-b701-4698-8389-4fb443c3972f"
  }
};

export const environment = {
  production: true,
  keycloak: keycloakConfig,
};
