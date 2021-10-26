import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />
      <main>{children}</main>
      <footer className="bg-gray-800 text-white space- px-4">
      <div className="inline-flex ">
        <ul className=" flex-col">
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
</div>

        <div className="inline-flex text-sm font-semibold text-right ">
        <ul className=" flex-col">
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
