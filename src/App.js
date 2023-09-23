import "./styles.css";
import "./component/navbar.js";
import Navbar from "./component/navbar.js";
import Home from "./pages/home.js";
import Cart from "./pages/cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [product, setproduct] = useState([]);
  const [cart, Setcart] = useState([]);

  function add_to_cart(item) {
    Setcart((cart) => [...cart, item]);
  }

  function remove_cart(item) {
    Setcart(cart.filter((i) => i.title !== item));
  }

  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                product={product}
                setproduct={setproduct}
                add_to_cart={add_to_cart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart cart={cart} Setcart={Setcart} remove_cart={remove_cart} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
