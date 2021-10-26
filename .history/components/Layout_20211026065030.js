import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />
      <main>{children}</main>
      <footer className="bg-gray-800 text-white justify-between flex-row">
        <ul className="flex-col">
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>

        <ul className="text-sm font-semibold">
          <li className="p-0 mt-0">Mereride Brands, LLC</li>
          <li>1018 Tenessee St.</li>
          <li>San Francisco, CA 94107</li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
