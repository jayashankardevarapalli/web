import React from "react";
import "./assets/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faGoogle,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="conme">Social Media: </div>
        <p className="gmail">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="gsize"
          ></FontAwesomeIcon>
          &nbsp;&nbsp;&nbsp;&nbsp;devarapallijayashankarkumar@gmail.com
        </p>
        <div className="innerobj">
          <a href="https://github.com/jayashankardevarapalli" className="dis">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/devarapallijayashankarkumar/"
            className="dis"
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
          <a href="https://twitter.com/MrJayashankar" className="dis">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
          <a
            href="mailto:devarapallijayashankarkumar@gmail.com"
            className="dis"
          >
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </a>
          <a href="https://g.dev/devarapallijayashankar" className="dis">
            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
          </a>
          <a href="https://www.hackerrank.com/MrJayaShankar" className="dis">
            <FontAwesomeIcon icon={faHackerrank}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
