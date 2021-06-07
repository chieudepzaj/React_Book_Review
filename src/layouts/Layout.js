import { Fragment } from "react";

import Navbar from "../components/Navbars/AuthNavbar";

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar transparent />
      {props.children}
    </Fragment>
  );
};

export default Layout;