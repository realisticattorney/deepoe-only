import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />
      <main>{children}</main>
      <footer className="bg-gray-800 text-white justify-between ">
        <div className="flex flex-col">
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </div>

        <div className="text-sm font-semibold">
          <li>Mereride Brands, LLC</li>
          <li>1018 Tenessee St.</li>
          <li>San Francisco, CA 94107</li>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
