import React from "react";
import "./App.css";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  const dishes = DISHES;

  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorant Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
