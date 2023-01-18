import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { shoppingCartRoutes } from './shopping-cart.routing';

@NgModule({
    declarations: [
        ShoppingCartComponent
    ],
    imports: [
        RouterModule.forChild(shoppingCartRoutes),
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        SharedModule,
    ]
})
export class ShoppingCartModule { }
