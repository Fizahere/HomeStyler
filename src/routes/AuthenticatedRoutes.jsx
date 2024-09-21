import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthenticatedRouteNames } from "../utilities/util.constant";
import MainLayout from "../components/MainLayout/MainLayout";
import Dashboard from "../Dashboard/Dashboard";
import Setting from "../Dashboard/Setting";
import Users from "../Dashboard/Users";
import ProductsListing from "../Dashboard/ProductsListing/ProductsListing";
import NotFound from "../Dashboard/NotFound";
import CustomSearch from "../components/Search/Search";
import SignOut from "../Auth/SignOut";

function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path={AuthenticatedRouteNames.Dashboard}
          element={<Dashboard />}
        />
        <Route path={AuthenticatedRouteNames.SETTING} element={<Setting />} />
        <Route path={AuthenticatedRouteNames.USERS} element={<Users />} />
        <Route path={AuthenticatedRouteNames.DESIGNS} element={<ProductsListing />} />
        <Route path={AuthenticatedRouteNames.SEARCH} element={<CustomSearch />}   />
      </Route>
      <Route path={AuthenticatedRouteNames.LOGOUT} element={<SignOut />}   />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AuthenticatedRoutes;
