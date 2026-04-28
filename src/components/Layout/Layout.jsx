import React from "react";
import { Nav } from "../Nav/Nav";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  console.log("Layout component is rendering");
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};
