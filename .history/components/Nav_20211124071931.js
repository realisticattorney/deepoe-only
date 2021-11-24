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
    <header
      className={`sticky top-0 ${
        router.pathname === '/' ? 'bg-transparent' : 'bg-deepoe-cream'
      } z-30 `}
    >
      <div className="flex items-center justify-between max-w-6xl  pt-11 pb-3 px-5 mx-auto">
        <div className="w-12 pl-1 pt-1 z-50">
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
          <a className="cursor-pointer z-50">
            <span className="text-4xl font-medium tracking-tighter">
          <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 360 147.7"
    style={{
      enableBackground: "new 0 0 360 147.7",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style type="text/css">
      {
        "\n\t.st0{fill:#F5F3EE;}\n\t.st1{fill:#282829;}\n\t.st2{fill:#222223;stroke:#282829;stroke-miterlimit:10;}\n\t.st3{fill:#222223;}\n"
      }
    </style>
    <g>
      <path
        className="st0"
        d="M65.06,89.98h-0.21c-2.45,5.62-7.56,8.17-13.89,8.17c-13.68,0-23.18-11.64-23.18-24.81 c0-12.87,9.7-24.71,23.08-24.71c5.51,0,11.34,2.14,13.99,7.25h0.21v-14.5c0-7.86-3.27-10.82-9.29-10.82c-0.82,0-3.17,0.2-3.17-1.02 c0-1.23,1.12-1.33,1.84-1.43c9.8-0.51,15.22-2.35,18.38-3.98c3.16-1.63,3.88-2.66,4.7-2.66c1.12,0,1.12,1.12,1.12,3.06v54.12 c0,13.68,0.04,15.52,0.04,16.95c0,1.49,0,2.2-2.04,2.25c-2.2,0.06-6.53-0.02-8.81,0c-2.09,0.02-2.71-0.71-2.76-1.84 C65.01,94.89,65.06,89.98,65.06,89.98z M65.06,74.36c0-16.95-3.68-22.67-10.62-22.67c-10.11,0-11.13,14.6-11.13,21.85 c0,7.05,0.1,21.55,10.11,21.55C59.54,95.09,65.06,90.9,65.06,74.36z"
      />
      <path
        className="st0"
        d="M77.56,75.38c0-14.09,13.68-26.75,28.69-26.75c7.45,0,13.68,2.76,18.07,8.99c1.02,1.53,3.4,2.45,5.23,2.96 c2.04,0.31,2.25,1.84-0.2,2.76L92.46,74.67c2.45,7.56,7.66,15.73,16.54,15.73c13.27,0,16.54-11.23,18.58-11.23 c0.51,0,0.92,0.41,0.92,0.92c0,5.41-12.25,18.07-27.67,18.07C87.67,98.15,77.56,88.86,77.56,75.38z M109.93,66.6 c1.43-0.51,2.76-1.23,2.76-2.76c0-5-5.21-12.15-10.72-12.15c-7.56,0-10.83,8.07-10.83,14.6c0,2.04,0.31,4.08,0.72,6.02L109.93,66.6 z"
      />
      <path
        className="st0"
        d="M205.95,48.63c-6.64,0-12.86,2.86-15.21,9.19l-0.21-3.93v-6.54c0-0.92-0.03-3.4-1.12-2.65 c-1.62,1.11-5.22,13.17-13.5,15.18c-2.58,0.63-4.48-2.16-5.5-3.68c-4.39-6.23-9.54-7.57-16.99-7.57 c-15.01,0-28.69,12.66-28.69,26.75c0,13.48,10.11,22.77,23.28,22.77c10.67,0,22.6-6.86,28.94-12.87v20.02 c0,9.91-0.06,18.25-0.06,19.68c0,1.02,1.53,1.6,2.25,1.02c4.8-3.9,22.52-6.35,22.52-6.35c0.82,0,2.15-0.45,1.9-1.57 c-0.27-1.2-1.7-1.45-2.82-1.45c-8.17,0-10.21-0.61-10.21-11.33V89.47h0.21c2.04,6.02,8.58,8.68,14.6,8.68 c13.17,0,23.18-11.84,23.18-24.51C228.52,58.84,217.49,48.63,205.95,48.63z M138.31,66.29c0-6.54,3.27-14.6,10.83-14.6 c5.51,0,10.88,6.69,10.88,11.69c0,1.53-1.33,2.25-2.76,2.76l-18.24,6.18C138.61,70.38,138.31,68.34,138.31,66.29z M156.18,90.39 c-8.88,0-14.09-8.17-16.54-15.73c0,0,23.3-8.59,34.13-11.82c3.48-1.04,3.07,4.17,3.18,7.94v10.54 C173.11,84.41,166.03,90.39,156.18,90.39z M201.76,95.09c-6.54,0-11.23-5.62-11.23-22.26c0-19.71,8.27-21.14,12.25-21.14 c9.7,0,10.21,14.4,10.21,21.34C212.99,80.59,212.08,95.09,201.76,95.09z"
      />
      <path
        className="st0"
        d="M282.75,73.34c0,16.13-13.58,24.81-28.08,24.81s-28.08-8.68-28.08-24.81c0-15.11,13.48-24.71,28.08-24.71 C269.27,48.63,282.75,58.23,282.75,73.34z M242.11,72.93c0,8.58,0.72,22.77,12.56,22.77c11.84,0,12.56-14.19,12.56-22.77 c0-8.37-1.23-21.85-12.56-21.85S242.11,64.56,242.11,72.93z"
      />
      <path
        className="st0"
        d="M280.6,75.38c0-14.09,13.68-26.75,28.69-26.75c7.45,0,13.68,2.76,18.07,8.99c1.02,1.53,1.43,2.45,3.27,2.96 c2.04,0.31,2.25,1.84-0.2,2.76l-34.92,11.33c2.45,7.56,7.66,15.73,16.54,15.73c13.28,0,16.54-11.23,18.58-11.23 c0.51,0,0.92,0.41,0.92,0.92c0,5.41-12.25,18.07-27.67,18.07C290.71,98.15,280.6,88.86,280.6,75.38z M312.97,66.6 c1.43-0.51,2.76-1.23,2.76-2.76c0-5-5.21-12.15-10.72-12.15c-7.56,0-10.82,8.07-10.82,14.6c0,2.04,0.31,4.08,0.71,6.02L312.97,66.6 z"
      />
    </g>
  </svg>
            </span>
          </a>
        </Link>
        <div className="w-14 pt-1 z-50">
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
