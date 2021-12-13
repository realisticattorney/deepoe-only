import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-deepoe-cream  ">
      <Script
        async
        type="text/javascript"
        src="//staticw2.yotpo.com/SpF8vLr2RDGVGtgQstgtn3wGbb1k5PpFKS4GRrhD/widget.js"
      ></Script>
      <Nav />
      <main className="h-full flex-grow overflow-scroll lg:max-w-screen-lg  lg:overflow-y-auto lg:mx-auto xxl:max-w-screen-xxl">
        {children}
      </main>
      {/* {router.pathname !== '/' && ( */}
      <footer className=" text-white h-72 text-sm font-extralight font-mono grid col-span-3 grid-cols-3 grid-rows-2 p-5 bg-deepoe-chocolate">
        <div className="inline-flex col-span-1 row-span-1 ">
          <ul className="flex-col space-y-1.7 ">
            <li>
              
              <a
                href="https://www.instagram.com/shopdeepoe/"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="font-extralight">Pinterest</li>
            <li className="font-extralight">Facebook</li>
            <li className="font-extralight">Tik Tok</li>
            <li className="font-extralight">Twitter</li>
          </ul>
        </div>

        <div className="flex-col justify-between">
          <ul className="flex-col  space-y-1.5 ">
            <li>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/sustainability">
                <a>Sustainability</a>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
            </li>

            <li>
              <Link href="/policies">
                <a>Policies</a>
              </Link>
            </li>

            <li>
              <Link href="/product-care">
                <a>Product Care</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-col justify-between">
          <ul className="flex-col space-y-1.5  ">
            <li>
              <Link href="/terms">
                <a>Terms</a>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <a>Privacy</a>
              </Link>
            </li>
            <li>
              <Link href="/accessibility">
                <a>Accessibility</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-col text-xs self-end -mb-2">
          <div className="flex-col space-y-0">
            {/* <li>Careers</li> */}
            <div className="-pl-2 -mb-1 pr-3">
              <Image
                src="/logo.svg"
                height={48}
                width={48}
                className="svg-stroke"
              />
            </div>
            <p className="">© 2022 deepoe</p>
          </div>
        </div>

        <div className="self-end">
          <ul className="text-xs flex-col">
            <li className="text-deepoe-cream font-thin text-opacity-70 -mb-1.5">
              designed & developed by
            </li>
            <li className="-mb-1.5">
              German Aquila{' '}
              <span className="text-deepoe-cream font-thin text-opacity-70 -mb-1.5">
                &
              </span>
            </li>
            <li className="-mb-1.5">Alan Padilla</li>
          </ul>
        </div>
        <div className="self-end">
          <ul className="text-xs flex-col">
            <li className="text-deepoe-cream font-thin text-opacity-70 -mb-1.5">
              a brand of
            </li>
            <li className="-mb-1.5">Mereride Brands, LLC</li>
          </ul>
        </div>
      </footer>
      {/* )} */}
    </div>
  );
};

export default Layout;
