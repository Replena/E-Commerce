import { Fragment } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main className="flex-grow w-full">{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
