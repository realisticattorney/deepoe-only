import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-deepoe-cream">
      <Script
        async
        type="text/javascript"
        src="//staticw2.yotpo.com/hr0fICvqdjkiFl7zuOBk3UhOjkZRHJ0Ro7gba2ET/widget.js"
      ></Script>
      {/* <Script
        async
        type="text/javascript"
        data-api-key=""
        id="stamped-script-widget"
        src="https://cdn-stamped-io.azureedge.net/files/widget.min.js"
      ></Script> */}
      <Nav />
      <main className="h-full flex-grow overflow-scroll">{children}</main>
      <footer className=" text-white h-60 text-sm font-extralight font-mono grid col-span-3 grid-cols-3 grid-rows-2 p-5 bg-deepoe-chocolate">
        <div className="inline-flex col-span-1 row-span-1 ">
          <ul className="flex-col space-y-1.5 ">
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Tik Tok</li>
            <li>Pinterest</li>
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
              <Link href="/deepoe/faq">
                <a>FAQ</a>
              </Link>
            </li>
            <li>
              <Link href="/deepoe/about">
                <a>About</a>
              </Link>
            </li>
            <li>Product Care</li>
          </ul>
        </div>
        <div className="flex-col justify-between">
          <ul className="flex-col space-y-1.5 ">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Accessibility</li>
            <li>
              <Link href="/deepoe/sustainability">
                <a>Sustainability</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-col text-xs self-end -mb-2">
          <ul className="flex-col space-y-0.5 ">
            {/* <li>Careers</li> */}
            <img
              src="/public/svg1.svg"
              height={30}
              width={30}
              className=" bg-white"
            />
            <li>© 2022 deepoe</li>
          </ul>
        </div>

        <div className="self-end">
          <ul className="text-xs flex-col">
            <li className="text-deepoe-cream font-thin -mb-1.5">a brand of</li>
            <li className="-mb-1.5">Mereride Brands, LLC</li>
            <li className="-mb-1.5">1018 Tenessee St.</li>
            <li className="-mb-1.5">San Francisco, CA 94107</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
