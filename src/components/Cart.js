import React, { useContext } from "react";
import { CartContext } from "../context/cart";

function Cart() {
  const { total } = useContext(CartContext);
  return (
    <div>
      <div className="cart">
        <div className="cart__icon">
          <i class="fas fa-shopping-cart"></i>
        </div>
        <div className="cart__number">
          <span>{total}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
