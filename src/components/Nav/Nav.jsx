import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/Auth";

export const Nav = () => {
  const { token } = useContext(AuthContext);
  return (
    <>
      <div className=" bg-cyan-400">
        <div className="flex justify-between gap-4 container mx-auto p-5 ">
          <div className="flex justify-between gap-4 ">
            <img src="" alt="" />
            {token ? (
              <ul className="flex justify-between gap-4">
                <li>
                  <NavLink to="products">Products</NavLink>
                </li>
                <li>
                  <NavLink to="categories">Categories</NavLink>
                </li>
                <li>
                  <NavLink to="cart">Cart</NavLink>
                </li>
              </ul>
            ) : null}
          </div>
          <div className="flex justify-between gap-4">
            <ul className="flex justify-between gap-4">
              <li>facebook</li>
              <li>twitter</li>
              <li>github</li>
            </ul>
            <ul className="flex justify-between gap-4">
              {token ? (
                <li>
                  <span className="">Logout</span>
                </li>
              ) : (
                <>
                  {" "}
                  <li>
                    <NavLink to="register">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="login">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
