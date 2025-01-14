import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItemS } from '../models/cartItems';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(product: Product) {
    let item = CartItemS.find((c) => c.product.productId === product.productId);

    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItemS.push(cartItem);
    }
  }

  list(): CartItem[] {
    return CartItemS;
  }
}
