import React from "react";
import List from "../List";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <List />
      <Outlet />
    </div>
  );
}

export default Layout;
