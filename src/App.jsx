import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import DataProvider from "./lib/Context";
import Navbar from "./Component/Navbar";
import ProductPage from "./Pages/ProductPage";
import "./App.css";
import Cart from "./Pages/Cart";
import WishList from "./Pages/WishLists";
import PassParams from "./Component/singlePage/PassParams";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<PassParams />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;
