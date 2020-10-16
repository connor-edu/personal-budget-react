import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Hero from "./Hero";
import HomePage from "./HomePage";
import Menu from "./Menu";
import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Hero />
      <Switch>
        <Route path={"/about"} component={AboutPage} />
        <Route path={"/login"} component={LoginPage} />
        <Route path={"/"} component={HomePage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
