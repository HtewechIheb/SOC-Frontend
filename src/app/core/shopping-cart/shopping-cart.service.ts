import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/product.types';
import { ShoppingCartItem } from './shopping-cart.types';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    public items: ShoppingCartItem[] = [];

    addItem(product: Product): void {
        const cartItem = this.items.find(item => item.product.code === product.code);

        if (cartItem) {
            cartItem.quantity++;
        }
        else {
            this.items.push({
                product: product,
                quantity: 1
            });
        }
    }

    removeItem(product: Product): void {
        const cartItem = this.items.find(item => item.product.code === product.code);

        if (cartItem && cartItem.quantity > 0) {
            cartItem.quantity--;

            if (cartItem.quantity === 0) {
                this.items.splice(this.items.findIndex(item => item.product.code === product.code), 1);
            }
        }
    }
}
