import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-deepoe-cream">
      <Nav />
      <main className="h-full flex-">{children}</main>
      <footer className=" text-white justify-between flex p-5 bg-deepoe-chocolate">
        <div className="inline-flex ">
          <ul className="flex-col space-y-0.5 font-extralight">
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="inline-flex text-right self-end">
          <ul className="text-xs flex-col">
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