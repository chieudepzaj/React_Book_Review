import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts



// views without layouts
import Landing from "./Pages/MainPage/Landing";
import Profile from "./Pages/Profile/Profile";
// import TestComponent from "TestComponent";
import Layout from "layouts/Layout";
import Footer from "./components/Footers/Footer";
// import Page6 from "components/Page6/page6";
ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/landing" exact component={Landing} />
        <Route path="/profile/:username" component={Profile} />

        {/* add redirect for first page */}
        <Redirect from="*" to="/landing" />
      </Switch>
    </Layout>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
