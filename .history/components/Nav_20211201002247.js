import Link from 'next/link';
import { useContext, useState, useEffect, useCallback, useRef } from 'react';
import { CartContext } from '../context/shopContext';
import MiniCart from './MiniCart';
import MenuDropdown from './MenuDropdown';
import { useRouter } from 'next/router';
import Image from 'next/image';
const Nav = () => {
  const router = useRouter();
  // console.log('routerssss', router);

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
    <header className={`sticky top-0 z-30 bg-deepoe-cream`}>
      <div className="flex items-center justify-between max-w-6xl  pt-0 px-5 mx-auto">
        <div className="w-14 pl-1 pt-0 z-50">
          {!parentState && !cartOpen ? (
            <a
              className="cursor-pointer font-mono text-lg font-extralight"
              onClick={() => wrapperSetParentState(!parentState)}
              // ref={cancelButtonRef}
            >
              menu
            </a>
          ) : (
            <p
              className={`cursor-pointer font-mono text-lg font-extralight ${
                !parentState ? `` : 'pt-0'
              }`}
            >
              {/* menu */}
              {!parentState ? `` : 'close'}
            </p>
          )}
        </div>
        <MenuDropdown
          parentState={parentState}
          wrapperSetParentState={wrapperSetParentState}
          // cancelButtonRef={cancelButtonRef}
        />
        <Link href="/collections/frontpage" passHref>
          <a className="cursor-pointer pt-2.5 z-50">
            {/* <span className="text-4xl font-medium tracking-tighter">
              deepoe
            </span> */}
            <Image
              src="/deepoeLogo.svg"
              height={50}
              width={220}
              className="svg-stroke"
            />
          </a>
        </Link>
        <div className="w-14 pt-0 z-50">
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
              className={`cursor-pointer font-mono text-lg  font-extralight ${
                !cartOpen ? `` : 'pt-0'
              }`}
            >
              {/* `cart(${cartQuantity})` */}
              {!cartOpen ? '' : 'close'}
            </p>
          )}
        </div>
        <MiniCart cart={cart} />
      </div>
      {router.pathname === '/' && (
        <Link href="/collections/frontpage" passHref>
          <div className="absolute w-full h-24 top-0 left-0 z-40"></div>
        </Link>
      )}
    </header>
  );
};

export default Nav;
