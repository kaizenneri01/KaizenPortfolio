import React, { Children } from "react";
import Footer from "../footer/Footer";
import Navigation from "../navigations/Navigation";

const Layout = ({ Children }) => {
  return (
    <div>
      <Navigation />
      {Children}
      <Footer />
    </div>
  );
};

export default Layout;
