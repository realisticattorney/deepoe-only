import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../context/shopContext';
import MiniCart from './MiniCart';

const Nav = () => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    cartQuantity += item?.variantQuantity;
  });
  return (
    <header className="sticky top-0 z-20 bg-deepoe-cream">
      <div className="flex items-center justify-between max-w-6xl pt-8 pb-2 px-4 mx-auto">
        <a className="cursor-pointer" onClick={() => setCartOpen(!cartOpen)}>
          menu
        </a>
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">deepoe</span>
          </a>
        </Link>
        <a className="cursor-pointer" onClick={() => setCartOpen(!cartOpen)}>
          cart ({cartQuantity})
        </a>
        <MiniCart cart={cart} />
      </div>
    </header>
  );
};

export default Nav;
