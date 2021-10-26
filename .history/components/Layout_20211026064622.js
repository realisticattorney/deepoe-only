import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />
      <main>{children}</main>
      <footer className="bg-gray-800 text-white text-center">
      <ul>
        <li>Instagram</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      
      Footer</footer>
    </div>
  );
};

export default Layout;
