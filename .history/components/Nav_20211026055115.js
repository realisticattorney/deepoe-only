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
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-6 pb-2 px-4 mx-auto">
      <a
          className="text-sm font-semibold cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
        >
          Menu
        </a>
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">deepoe</span>
          </a>
        </Link>
        <a
          className="text-sm font-semibold cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
        >
          Cart ({cartQuantity})
        </a>
        <MiniCart cart={cart} />
      </div>
    </header>
  );
};

export default Nav;
