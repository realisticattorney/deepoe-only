import { createContext, useState, useEffect } from 'react';
import { createCheckout } from '../lib/shopify';

const CartContext = createContext();

export default function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutId, setCheckoutId] = useState('');
  const [checkoutUrl, setCheckoutUrl] = useState('');

  async function addToCart(newItem) {
    if (cart.length === 0) {
      setCart([newItem]);
      const checkout = await createCheckout(
        newItem.id,
        newItem.variantQuantity
      );
      setCheckoutId(checkout.id);
      setCheckoutUrl(checkout.webUrl);

      localStorage.setItem('checkout_id', JSON.stringify([newItem, checkout]));
    } else {
      const newCart = [...cart];
      cart.map((item) => {
        if (item.id === newItem.id) {
          // item.variantQuantity += newItem.variantQuantity // I think this is wrong
          item.variantQuantity++;
          newCart = [...cart];
        } else {
          newCart = [...cart, newItem];
        }
      });
      setCart(newCart);
      const newCheckout = await updateCheckout(checkoutId, newCart);
    }
  }

  return <div></div>;
}
