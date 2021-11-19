import Link from 'next/link';
import { useContext, useState, useEffect, useCallback, useRef } from 'react';
import { CartContext } from '../context/shopContext';
import MiniCart from './MiniCart';
import MenuDropdown from './MenuDropdown';
import { useRouter } from 'next/router';
import Image from 'next/image';
const Nav = () => {
  const router = useRouter();
  console.log('routerssss', router);

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
    <header className="sticky top-0  bg-deepoe-cream z-30 border-b ">
      <div className="flex items-center justify-between max-w-6xl  pt-9 pb-2 px-5 mx-auto">
        <div className="w-12 pl-1 pt-1 z-50">
          {!parentState && !cartOpen ? (
            <a
              className="cursor-pointer font-mono text-lg   font-extralight"
              onClick={() => wrapperSetParentState(!parentState)}
              // ref={cancelButtonRef}
            >
              menu
            </a>
          ) : (
            <p
              className={`cursor-pointer font-mono text-lg font-extralight ${
                !parentState ? `` : 'font-normal pt-0'
              }`}
            >
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
        <div className="w-14 pt-1">
          {!cartOpen && !parentState ? (
            <a
              className="cursor-pointer  font-mono text-lg  font-extralight"
              onClick={() => {
                setCartOpen(!cartOpen);
              }}
            >
              cart({cartQuantity})
            </a>
          ) : (
            <p
              className={`cursor-pointer font-mono text-lg  font-extralight${
                !cartOpen ? `` : 'font-normal pt-0'
              }`}
            >
              {!cartOpen ? `cart(${cartQuantity})` : 'close'}
            </p>
          )}
        </div>
        <MiniCart cart={cart} />
      </div>
    
    <div className="absolute top-0 z-40">
        <Image
          src="/deepoeHome.jpg"
          layout="fixed"
          // objectFit="cover"
          className="z-0"
          height="100px"
          width="100wv"
        />
      </div>
    </header>
  );
};

export default Nav;
