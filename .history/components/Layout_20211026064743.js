import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />
      <main>{children}</main>
      <footer className="bg-gray-800 text-white">
      <ul className="flex-col">
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Careers</li>
        <li>Contact Us</li>
      </ul>
      
      
      </footer>
    </div>
  );
};

export default Layout;
