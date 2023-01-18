import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'app/core/product/product.types';
import { ShoppingCartService } from 'app/core/shopping-cart/shopping-cart.service';
import { ShoppingCartItem } from 'app/core/shopping-cart/shopping-cart.types';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styles: [
        `
            .inventory-grid {
                grid-template-columns: 48px auto 40px 40px 40px;

                @screen sm {
                    grid-template-columns: 72px auto 72px 128px 40px;
                }
            }
        `
    ],
    encapsulation: ViewEncapsulation.None,
})
export class ShoppingCartComponent implements OnInit {
    items: ShoppingCartItem[];

    constructor(private toastrService: ToastrService, private shoppingCartService: ShoppingCartService) { }

    ngOnInit(): void {
        this.items = this.shoppingCartService.items;
    }

    confirmOrder(): void {

    }

    removeProduct(product: Product): void {
        this.shoppingCartService.removeItem(product);
        this.toastrService.info('Product Removed From Cart!');
    }
}
