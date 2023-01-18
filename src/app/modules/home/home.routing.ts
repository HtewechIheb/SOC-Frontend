import { Route } from '@angular/router';
import { HomeComponent } from 'app/modules/home/home.component';

export const homeRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent
    }
];
