import React, { useState } from "react";
import "../../src/style/navbar.css";
import { Link } from "react-router-dom";
import transparentLogo from "../assets/logos/PawsibilityLogoTransparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faHeart,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Burger from "./Burger";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="brand-logo">
          <Link to="/">
            <img className="transparentLogo" src={transparentLogo} alt="Home" />
          </Link>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/search">
                <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
              </Link>
            </li>
            <li>
              <Link to="/favoritePets">
                <FontAwesomeIcon icon={faHeart} /> Favorite Pets
              </Link>
            </li>
            <li>
              <Link
                to="https://medium.com/@jessbecoding/pawsibility-2-0-a7a18997d17a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faMedium} /> Medium
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/jessbecoding/web-ft-11-2022/tree/main/week13/Pawsibility/pawsibility"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> Github
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Burger />
    </div>
  );
};

export default NavBar;
