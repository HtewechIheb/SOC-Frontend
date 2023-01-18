import { Product } from 'app/core/product/product.types';

export interface ShoppingCartItem {
    product: Product;
    quantity: number;
}
