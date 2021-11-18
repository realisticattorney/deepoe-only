import Link from 'next/link';
import { useContext, useState, useEffect, useCallback, useRef } from 'react';
import { CartContext } from '../context/shopContext';
import MiniCart from './MiniCart';
import MenuDropdown from './MenuDropdown';

const Nav = () => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  const [parentState, setParentState] = useState(false);
  const cancelButtonRef = useRef();

  let cartQuantity = 0;
  cart.map((item) => {
    cartQuantity += item?.variantQuantity;
  });

  const wrapperSetParentState = useCallback(
    (val) => {
      setParentState(val);
    },
    [setParentState]
  );

  return (
    <header className="sticky top-0  bg-deepoe-cream z-50 border-b ">
      <div className="flex items-center justify-between max-w-6xl pt-9 pb-2 px-5 mx-auto">
      <div className="w-12 pl-1">
        {!parentState && !cartOpen ? (
          <a
            className="cursor-pointer font-public-sans-normal  font-extralight"
            onClick={() => wrapperSetParentState(!parentState)}
            // ref={cancelButtonRef}
          >
            menu
          </a>
        ) : (
          <p className={`cursor-pointer font-public-sans-normal font-extralight ${!parentState ? `` : 'font-normal'}`}>
            {!parentState ? `menu` : 'close'}
          </p>
        )}
        </div>
        <MenuDropdown
          parentState={parentState}
          wrapperSetParentState={wrapperSetParentState}
          // cancelButtonRef={cancelButtonRef}
        />
        <Link href="/collections/all-products" passHref>
          <a className="cursor-pointer">
            <span className="text-4xl font-medium tracking-tighter">
              deepoe
            </span>
          </a>
        </Link>
        <div className="w-14">
        {!cartOpen && !parentState ? (
          <a
            className="cursor-pointer  font-public-sans-normal  font-extralight"
            onClick={() => {
              setCartOpen(!cartOpen);
            }}
          >
            cart({cartQuantity})
          </a>
        ) : (
          <p className="cursor-pointer  font-public-sans-normal  font-extralight">
            {!cartOpen ? `cart(${cartQuantity})` : 'close'}
          </p>
        )}
          </div>
        <MiniCart cart={cart} />
      </div>
    </header>
  );
};

export default Nav;
