import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

import {
  FaEdge,
  FaProductHunt,
  FaUser,
  FaBook,
  FaAddressBook,
} from "react-icons/fa";

export const Navbar = () => {
  const Route = [
    {
      path: "/",
      name: "Products",
      logo: <FaProductHunt />,
    },
    {
      path: "/admin",
      name: "Admin",
      logo: <FaUser />,
    },
    {
      path: "/contact",
      name: "Contact",
      logo: <FaBook />,
    },
    {
      path: "/login",
      name: "Login",
      logo: <FaEdge />,
    },
    {
      id: 5,
      path: "/SignUp",
      name: "SignUp",
      logo: <FaEdge />,
    },
    {
      id: 6,
      path: "/addproduct",
      name: "Add Product",
      logo: <FaAddressBook />,
    },
  ];
  const [routeDate] = useState(Route);
  return (
    <div className="Navbar">
      <nav>
        <p>
          <FaEdge />
        </p>
        <ul>
          {routeDate.map(({ name, logo, path }, index) => {
            return (
              <span key={index}>
                <li>
                  <span>{logo}</span>
                  <Link to={path} className="link">
                    {name}
                  </Link>
                </li>
              </span>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
