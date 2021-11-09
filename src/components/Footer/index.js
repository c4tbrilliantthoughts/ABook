import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      ABook.
      <span style={{ color: "#7c7c7c" }}>
        {" "}
        Designed by Sumanth Sanathi &nbsp; |
      </span>
      <a
        href="https://github.com/c4tbrilliantthoughts/ABook"
        target="_blank"
        style={{ color: "#eb641a" }}
      >
        &nbsp; GitHub
      </a>
    </div>
  );
};

export default Footer;
