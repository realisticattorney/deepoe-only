import Link from 'next/link';

const Nav = () => {
  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 mx-auto"></div>
      <Link href="/" passHref>
         <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">
               Shopify + Next.js
            </span>
         </a>
      </Link>
      <a>
         
      </a>
    </header>
  );
};

export default Nav;
