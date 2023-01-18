import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { HomeComponent } from 'app/modules/home/home.component';
import { homeRoutes } from 'app/modules/home/home.routing';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(homeRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule
    ]
})
export class HomeModule {
}
