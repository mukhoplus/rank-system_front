import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div id="footer" className="footer text-center">
        Copyright ⓒ 2022 - {new Date().getFullYear()}, Made by{" "}
        <a href="https://github.com/mukhoplus">Mukho</a>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
