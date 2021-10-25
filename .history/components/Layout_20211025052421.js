const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav></Nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
