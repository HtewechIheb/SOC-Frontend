import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { ProductsComponent } from './products.component';
import { productsRoutes } from './products.routing';

@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [
        RouterModule.forChild(productsRoutes),
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        SharedModule,
        FuseCardModule
    ]
})
export class ProductsModule { }
