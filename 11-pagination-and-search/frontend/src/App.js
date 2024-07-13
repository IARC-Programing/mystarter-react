import React from "react";

import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Footer from "./Components/Footer";
import Topbar from "./Components/Topbar";

import UserList from "./views/UserList";
import CreateOneUser from "./views/CreateOneUser";
import DetailUser from "./views/DetailUser";

import ProductList from "./views/ProductList";

import OrderList from "./views/OrderList";

function App() {
  return (
    <div>
      <BrowserRouter basename='/'>
        <Topbar appTitle='IARC Devboard' />{" "}
        <Routes>
          <Route path='user'>
            <Route path='create' element={<CreateOneUser />} />
            <Route path='detail/:id' element={<DetailUser />} />
            <Route index element={<UserList />} />
          </Route>
          <Route path='product'>
            <Route index element={<ProductList />} />
          </Route>
          <Route path='order'>
            <Route index element={<OrderList />} />
          </Route>

          <Route path='/' element={<UserList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
