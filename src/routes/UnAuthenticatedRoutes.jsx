import react, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";
import ClientLayout from "../components/ClientLayout/ClientLayout";
import Home from "../ClientSite/Home";
import NotFound from "../Dashboard/NotFound";
import Shop from '../ClientSite/Shop'
import Sitemap from "../ClientSite/Sitemap";
import SignIn from "../Auth/Login";
import SignUp from "../Auth/Register";
import Detail from "../ClientSite/Detail";

function UnAuthenticatedRoutes() {
  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route path={UnAuthenticatedRoutesNames.HOME} element={<Home />} />
        <Route path={UnAuthenticatedRoutesNames.SHOP} element={<Shop />} />
        <Route path={UnAuthenticatedRoutesNames.SITEMAP} element={<Sitemap />} />
        <Route path={UnAuthenticatedRoutesNames.DETAIL} element={<Detail />} />
      </Route>
        <Route path={UnAuthenticatedRoutesNames.LOGIN} element={<SignIn />} />
        <Route path={UnAuthenticatedRoutesNames.SIGNUP} element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default UnAuthenticatedRoutes;
