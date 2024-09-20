import react, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";
import ClientLayout from "../components/ClientLayout/ClientLayout";
import Home from "../ClientSite/Home";
import NotFound from "../Dashboard/NotFound";
import Shop from '../ClientSite/Shop'
import Sitemap from "../ClientSite/Sitemap";
import SignIn from "../Auth/Login";
import Detail from "../ClientSite/Detail";
import Contact from '../ClientSite/Contact'
import Feedback from '../ClientSite/Feedback'
import About from "../ClientSite/About";
import Products from "../ClientSite/Products";
import ProductDetail from "../ClientSite/ProductDetail";

function UnAuthenticatedRoutes() {
  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route path={UnAuthenticatedRoutesNames.HOME} element={<Home />} />
        <Route path={UnAuthenticatedRoutesNames.SHOP} element={<Shop />} />
        <Route path={UnAuthenticatedRoutesNames.PRODUCTS} element={<Products />} />
        <Route path={UnAuthenticatedRoutesNames.SITEMAP} element={<Sitemap />} />
        <Route path={UnAuthenticatedRoutesNames.DETAIL} element={<Detail />} />
        <Route path={UnAuthenticatedRoutesNames.CONTACT} element={<Contact />} />
        <Route path={UnAuthenticatedRoutesNames.FEEDBACK} element={<Feedback />} />
        <Route path={UnAuthenticatedRoutesNames.ABOUT} element={<About />} />
        <Route path={UnAuthenticatedRoutesNames.PRODUCTDETAIL} element={<ProductDetail />} />
        <Route path={UnAuthenticatedRoutesNames.WISHLIST} element={<Shop />} />
      </Route>
        <Route path={UnAuthenticatedRoutesNames.LOGIN} element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default UnAuthenticatedRoutes;
