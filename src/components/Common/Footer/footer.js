import React from "react";
import PropTypes from "prop-types";
import styles from "../../../styles/UI/footer.scss";

const Footer = (props, context) => (
  <footer>
          <div className="container">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Profiles</a>
                </li>
                <li>
                  <a href="#">Languages</a>
                </li>
              </ul>
            </nav>
            <div className="copyright-notice">&copy; 2019 Complaints</div>
          </div>
        </footer>
);

Footer.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Footer;