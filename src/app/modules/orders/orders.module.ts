import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { OrdersComponent } from './orders.component';
import { ordersRoutes } from './orders.routing';

@NgModule({
    declarations: [
        OrdersComponent
    ],
    imports: [
        RouterModule.forChild(ordersRoutes),
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        SharedModule,
        FuseCardModule
    ]
})
export class OrdersModule {

}
