import Nav from './Nav';
import Link from 'next/link';
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <Script
    type="text/javascript"
    src="//staticw2.yotpo.com/hr0fICvqdjkiFl7zuOBk3UhOjkZRHJ0Ro7gba2ET/widget.js"
  ></Script>
    <div className="flex flex-col min-h-screen bg-deepoe-cream">
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