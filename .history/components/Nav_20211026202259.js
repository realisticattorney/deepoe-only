import Link from 'next/link';
import { useContext, useState } from 'react';
import { CartContext } from '../context/shopContext';
import MiniCart from './MiniCart';
import MenuDropdown from './MenuDropdown';

const Nav = () => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  const { menuOpen, setMenuOpen } = useState(false);

  let cartQuantity = 0;
  cart.map((item) => {
    cartQuantity += item?.variantQuantity;
  });
  return (
    <header className="sticky top-0 z-20 bg-deepoe-cream">
      <div className="flex items-center justify-between max-w-6xl pt-14 pb-2 px-4 mx-auto">
        <a
          className="cursor-pointer font-light"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          menu
        </a>
        <MenuDropdown menuOpen={menuOpen} setMenuOpen={() => } />
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-4xl font-medium">deepoe</span>
          </a>
        </Link>
        <a
          className="cursor-pointer font-light"
          onClick={() => setCartOpen(!cartOpen)}
        >
          cart ({cartQuantity})
        </a>
        <MiniCart cart={cart} />
      </div>
    </header>
  );
};

export default Nav;
