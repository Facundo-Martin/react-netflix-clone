import clsx from "clsx";
import React, { useEffect, useState } from "react";
import "./Nav.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  let timer;

  const transitionNavbar = () => {
    console.log("scrolling");
    if (window.scrollY > 100) setShow(true);
    else setShow(false);
  };

  const debouncedTransitionNavbar = () => {
    clearTimeout(timer);
    timer = setTimeout(transitionNavbar, 250);
  };

  useEffect(() => {
    window.addEventListener("scroll", debouncedTransitionNavbar);

    return () =>
      window.removeEventListener("scroll", debouncedTransitionNavbar);
  }, [show]);

  return (
    <div className={clsx("nav", show && "nav__black")}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix logo"
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix logo"
        />
      </div>
    </div>
  );
};

export default Navbar;
