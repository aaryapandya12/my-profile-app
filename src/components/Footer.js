import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} ViewSphere. All rights reserved.</p>
      <p>
        Follow us on
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          {" "}
          Twitter
        </a>{" "}
        |
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Facebook
        </a>
      </p>
    </footer>
  );
};

export default Footer;
