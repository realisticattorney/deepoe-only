import Nav from './Nav';
import Link from 'next/link';
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
      <footer className=" text-white justify-between flex p-5 bg-deepoe-chocolate">
        <div className="inline-flex ">
          <ul className="flex-col space-y-0.5 font-public-sans-light">
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Careers</li>
            <li>
              {' '}
              <Link href="/deepoe/about">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="inline-flex text-right self-end">
          <ul className="text-xs flex-col font-public-sans-light">
            <li>Mereride Brands, LLC</li>
            <li>1018 Tenessee St.</li>
            <li>San Francisco, CA 94107</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;