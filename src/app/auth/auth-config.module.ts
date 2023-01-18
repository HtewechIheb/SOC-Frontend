import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'http://localhost:8085/realms/soc-project',
            redirectUrl: 'http://localhost:4200/',
            postLogoutRedirectUri: 'http://localhost:4200/',
            clientId: 'soc-project-auth',
            scope: 'openid profile email offline_access', // 'openid profile offline_access ' + your scopes
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            renewTimeBeforeTokenExpiresInSeconds: 30,
        }
    })],
    exports: [AuthModule],
})
export class AuthConfigModule { }
