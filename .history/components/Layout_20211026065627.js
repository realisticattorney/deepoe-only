import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />
      <main>{children}</main>
      <footer className="bg-gray-800 text-white justify-between ">
      <div className="inline-flex">
        <ul className=" flex-col">
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
</div>

        <div className="text-sm font-semibold text-right ">
          <p>Mereride Brands, LLC</p>
          <p>1018 Tenessee St.</p>
          <p>San Francisco, CA 94107</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
