import React from "react";
import "./Menu.css";
import { ImDropbox } from "react-icons/im";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <div className="containerMenu">
      <div className="logoMenu">
        <img
          src="https://zuramai.github.io/mazer/demo/assets/images/logo/logo.png"
          alt=""
        />
      </div>
      <ul className="menuC1">
        <li className="menuTitle">Menu</li>
        <Link to="/admin/product">
          {" "}
          <li
            className={`${String(window.location.pathname) === "/admin/product"
              ? "itemMenuActive"
              : "itemMenu"
              }`}
          >
            <ImDropbox /> <p>Product line</p>
          </li>
        </Link>
        <Link to="/admin/order">
          <li
            className={`${String(window.location.pathname) === "/admin/order"
              ? "itemMenuActive"
              : "itemMenu"
              }`}
          >
            <ImDropbox /> <p>Order</p>
          </li>
        </Link>
        <Link to="/admin/brands">
          <li
            className={`${String(window.location.pathname) === "/admin/brands"
              ? "itemMenuActive"
              : "itemMenu"
              }`}
          >
            <ImDropbox /> <p>Brand</p>
          </li>
        </Link>
        <Link to="/admin/users">
          <li className={`${String(window.location.pathname) === "/admin/users"
            ? "itemMenuActive"
            : "itemMenu"
            }`}>
            <ImDropbox /> <p>User</p>
          </li>
        </Link>
        <li className="itemMenu">
          <ImDropbox /> <p>Product</p>
        </li>
      </ul>
    </div>
  );
}
