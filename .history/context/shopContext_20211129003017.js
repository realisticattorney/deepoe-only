import { createContext, useState, useEffect } from 'react';
import { createCheckout, updateCheckout } from '../lib/shopify';

const CartContext = createContext();

export default function ShopProvider({ children, router }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutId, setCheckoutId] = useState('');
  const [checkoutUrl, setCheckoutUrl] = useState('');
  const [reload, setReload] = useState(false);

  if(router === "")

  console.log(router)

  useEffect(() => {
    if (localStorage.checkout_id) {
      const cartObject = JSON.parse(localStorage.checkout_id);
      if (cartObject[0].id) {
        setCart([cartObject[0]]);
      } else if (cartObject[0].length > 0) {
        setCart(...[cartObject[0]]);
      }

      setCheckoutId(cartObject[1].id);
      setCheckoutUrl(cartObject[1].webUrl);
    }
  }, []);

  async function addItemToCart(newItem) {
    let newCart = [...cart];
    let newItemAddedExists = false;
    newCart.map((item) => {
      if (
        item.id === newItem.id &&
        item.variantTitle === newItem.variantTitle
      ) {
        item.variantQuantity++;
        newItemAddedExists = true;
      }
    });

    if (!newItemAddedExists) {
      newCart = [...cart, newItem];
    }

    setCart(newCart);
    const newCheckout = await updateCheckout(checkoutId, newCart);
    localStorage.setItem('checkout_id', JSON.stringify([newCart, newCheckout]));
  }

  async function addToCart(newItem) {
    setCartOpen(true); //annoying

    console.log('addToCart', newItem);
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
      let newCart = [...cart];
      let newItemExists = false;
      newCart.map((item) => {
        if (item.id === newItem.id) {
          item.variantQuantity++;
          newItemExists = true;
        }
      });

      if (!newItemExists) {
        newCart = [...cart, newItem];
      }

      setCart(newCart);
      const newCheckout = await updateCheckout(checkoutId, newCart);
      localStorage.setItem(
        'checkout_id',
        JSON.stringify([newCart, newCheckout])
      );
    }
  }

  async function removeCartItem(itemToRemove) {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove);
    setCart(updatedCart);
    const newCheckout = await updateCheckout(checkoutId, updatedCart);

    if (cart.length === 1) {
      setCartOpen(false);
    }

    localStorage.setItem(
      'checkout_id',
      JSON.stringify([updatedCart, newCheckout])
    );
  }
  async function subtractCartItem(newItem) {
    console.log('cart', cart);
    let newCart = [...cart];
    cart.map((item) => {
      if (item.id === newItem.id) {
        if (item.variantQuantity > 1) {
          console.log('item.variantQuantity', item.variantQuantity);
          item.variantQuantity--;
          newCart = [...cart];
        } else {
          console.log('just 1 item bruh');
          return;
        }
      }
    });
    setCart(newCart);
    const newCheckout = await updateCheckout(checkoutId, newCart);
    localStorage.setItem('checkout_id', JSON.stringify([newCart, newCheckout]));
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        addToCart,
        checkoutUrl,
        removeCartItem,
        subtractCartItem,
        addItemToCart,
        reload,
        setReload,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const ShopConsumer = CartContext.Consumer;

export { ShopConsumer, CartContext };
