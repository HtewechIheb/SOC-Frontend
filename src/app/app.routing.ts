import { Route } from '@angular/router';
import { AuthGuard } from 'app/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'products', loadChildren: () => import('app/modules/products/products.module').then(m => m.ProductsModule) },
        ]
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'shopping-cart', loadChildren: () => import('app/modules/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },
        ]
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'orders', loadChildren: () => import('app/modules/orders/orders.module').then(m => m.OrdersModule) },
        ]
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'home', loadChildren: () => import('app/modules/home/home.module').then(m => m.HomeModule) },
        ]
    },
];
