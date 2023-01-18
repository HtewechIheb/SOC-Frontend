import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    /**
     * Constructor
     */
    constructor(private oidcSecurityService: OidcSecurityService, private router: Router) {
    }

    ngOnInit(): void {
        this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
            if (isAuthenticated) {
                this.router.navigate(['/products']);
            }
        });
    }
}
