import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import useDebouncedEvent from "../../hooks/useDebouncedEvent";
import "./Nav.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) setShow(true);
    else setShow(false);
  };

  useDebouncedEvent("scroll", transitionNavbar, 50, setShow);

  return (
    <div className={clsx("nav", show && "nav__black")}>
      <div className="nav__contents">
        <Link to="/">
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix logo"
          />
        </Link>
        <Link to="/profile">
          <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
