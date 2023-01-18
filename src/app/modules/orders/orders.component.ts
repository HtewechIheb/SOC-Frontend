import { Component, ViewEncapsulation } from '@angular/core';
import { Order } from 'app/core/order/order.types';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styles: [
        `
            .inventory-grid {
                grid-template-columns: auto 72px 40px;

                @screen sm {
                    grid-template-columns: auto 158px 40px;
                }
            }
        `
    ],
    encapsulation: ViewEncapsulation.None,
})
export class OrdersComponent {
    orders: Order[] = [
        {
            orderNumber: '128-6515354-5153194',
            total: 3500
        }
    ];
}
