import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assurez-vous d'avoir bien importé Link
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Cheese Burger", img: burger1, value: 0 },
    { id: 2, title: "Cheese Burger Vegane", img: burger2, value: 0 },
    { id: 3, title: "Cheese Burger avec Frites", img: burger3, value: 0 },
  ]);

  const increment = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, value: item.value + 1 } : item
      )
    );
  };

  const decrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.value > 0
          ? { ...item, value: item.value - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.value * 2000,
      0
    );
    const tax = subtotal * 0.18;
    const deliveryFee = 200;
    const total = subtotal + tax + deliveryFee;
    return total;
  };

  return (
    <section className="cart">
      <main>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            title={item.title}
            img={item.img}
            value={item.value}
            increment={() => increment(item.id)}
            decrement={() => decrement(item.id)}
          />
        ))}
        <article>
          <div>
            <h4>Sous-total</h4>
            <p>${calculateTotal()}</p>
          </div>
          <div>
            <h4>TVA</h4>
            <p>${calculateTotal() * 0.18}</p>
          </div>
          <div>
            <h4>Frais de livraison</h4>
            <p>$200</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>${calculateTotal()}</p>
          </div>
          <Link to="/shipping">Payer</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;

