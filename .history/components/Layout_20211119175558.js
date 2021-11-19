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
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
              <path
                class="st0"
                d="M281.58,180c25.87-8.54,43.7-31.4,43.7-61.71c0-40.47-39.3-76.84-82.41-76.84c-21.41,0-39.31,7.92-51.92,25.81
	c-2.93,4.4-3.66,7.89-9.12,8.26c-1.26,0.08-2.53,0.03-3.39-0.15c-5.36-1.14-6.45-4.11-9.39-8.51
	c-12.61-17.89-30.5-25.81-51.92-25.81c-43.11,0-82.41,36.37-82.41,76.84c0,30.77,18.37,53.89,44.9,62.11
	c-26.53,8.22-44.9,31.33-44.9,62.11c0,40.47,39.3,76.84,82.41,76.84c21.41,0,39.31-7.92,51.92-25.81c2.93-4.4,4.03-7.36,9.39-8.51
	c0.86-0.18,2.14-0.24,3.39-0.15c5.47,0.37,6.19,3.86,9.12,8.26c12.61,17.89,30.5,25.81,51.92,25.81c43.11,0,82.41-36.37,82.41-76.84
	C325.28,211.4,307.46,188.54,281.58,180z M255.18,50.25c21.7,0,31.09,23.17,31.09,41.94c0,5.75-0.85,11.5-1.98,16.97
	c-0.04,0.18-0.22,0.28-0.39,0.23l-51.59-16.32c-4.11-1.47-7.92-3.52-7.92-7.92C224.39,70.78,239.34,50.25,255.18,50.25z
	 M75.71,108.77c-1.13-5.47-1.98-11.22-1.98-16.97c0-18.77,9.39-41.94,31.09-41.94c15.84,0,30.8,20.53,30.8,34.9
	c0,4.4-3.81,6.45-7.92,7.92L76.1,108.99C75.93,109.05,75.75,108.94,75.71,108.77z M77.84,115.75c0,0,92.71-29.94,100.01-32.46
	c0.79-0.27,1.69-0.61,3.61-0.61c1.39,0,2.71,0.43,3.21,0.61c24.81,8.68,97.49,32.85,97.49,32.85c0.16,0.05,0.25,0.23,0.2,0.39
	c-7.08,21.62-22.01,44.88-47.42,44.88c-38.13,0-47.9-32.64-53.77-32.64c-0.47,0-1.54-0.02-2.26-0.02
	c-5.86,0-15.73,32.26-53.86,32.26c-25.4,0-40.34-23.25-47.42-44.88C77.58,115.97,77.67,115.8,77.84,115.75z M234.03,180
	c-27.9,8.33-48.85,29.06-53.86,42.61c-0.09,0.25-0.39,0.26-0.49,0c-5.36-13.77-26.75-34.63-55.04-42.61
	c28.29-7.98,49.69-28.84,55.04-42.61c0.1-0.25,0.39-0.25,0.49,0C185.18,150.94,206.13,171.67,234.03,180z M104.82,310.15
	c-21.7,0-31.09-23.17-31.09-41.94c0-5.75,0.85-11.5,1.98-16.97c0.04-0.18,0.22-0.28,0.39-0.23l51.59,16.32
	c4.11,1.47,7.92,3.52,7.92,7.92C135.61,289.62,120.66,310.15,104.82,310.15z M184.68,276.71c-0.51,0.18-1.83,0.61-3.21,0.61
	c-1.93,0-2.83-0.34-3.61-0.61c-7.31-2.52-100.01-32.46-100.01-32.46c-0.16-0.05-0.25-0.23-0.2-0.39
	c7.08-21.62,22.01-44.88,47.42-44.88c38.13,0,48,32.26,53.86,32.26c0.73,0,1.79-0.02,2.26-0.02c5.86,0,15.64-32.64,53.77-32.64
	c25.4,0,40.34,23.25,47.42,44.88c0.05,0.16-0.04,0.33-0.2,0.39C282.16,243.86,209.49,268.03,184.68,276.71z M255.18,309.75
	c-15.84,0-30.8-20.53-30.8-34.9c0-4.4,3.81-6.45,7.92-7.92l51.59-16.32c0.17-0.05,0.36,0.05,0.39,0.23
	c1.13,5.47,1.98,11.22,1.98,16.97C286.27,286.58,276.89,309.75,255.18,309.75z"
              />
            </svg>
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
