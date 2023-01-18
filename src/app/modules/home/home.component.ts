import { Component, ViewEncapsulation } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
    /**
     * Constructor
     */
    constructor(private oidcSecurityService: OidcSecurityService) {
    }

    login(): void {
        this.oidcSecurityService.authorize();
    }

    register(): void {

    }
}
