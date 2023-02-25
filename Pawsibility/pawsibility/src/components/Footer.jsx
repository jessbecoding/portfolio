import React from "react";
import "../../src/style/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Pawsibility</h4>
            <ul className="list-unstyled">
              <li>(555) 555-5555</li>
              <li>123 Main Street</li>
              <li>Farleigh, Gyrradin</li>
            </ul>
          </div>
          <div className="col">
            <h4>Another Column!</h4>
            <ul className="list-unstyled">
              <li>Wow!</li>
              <li>Much content</li>
              <li>Very cool</li>
            </ul>
          </div>
          <div className="col">
            <h4>Jessika Adams</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.linkedin.com/in/jessikalynnadams/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/jessbecoding" target="_blank">
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              </li>
              <li>
                <a href="https://medium.com/@jessbecoding" target="_blank">
                  <FontAwesomeIcon icon={faMedium} /> Medium
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Pawsibility | All rights reserved |
            <a href=""> Terms of Service</a> | <a href="">Privacy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
