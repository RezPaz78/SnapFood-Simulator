import React, { lazy } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("../pages/home"));
const Vendors = lazy(() => import("../pages/vendors"));

export const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    path: "/vendors",
    component: Vendors,
  },
];

export const renderRoutes = (routes) => {
  return routes.map((route, key) => {
    return (
      <Route key={key} path={route.path} exact={route.exact}>
        <route.component />
      </Route>
    );
  });
};
