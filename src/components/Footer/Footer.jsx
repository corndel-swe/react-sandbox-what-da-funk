import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <ul className="site-footer__links">
          <li>
            <a
              href="https://www.flaticon.com/free-icons/summer"
              title="summer icons"
            >
              Summer icons created by Freepik - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/sunrise"
              title="sunrise icons"
            >
              Sunrise icons created by Freepik - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/moon"
              title="moon icons"
            >
              Moon icons created by Freepik - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/next"
              title="next icons"
            >
              Next icons created by tenBystry - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/left-arrow"
              title="left arrow icons"
            >
              Left arrow icons created by tenBystry - Flaticon
            </a>
          </li>
        </ul>

        <p className="site-footer__copy">
          © {new Date().getFullYear()} What Da Funk : Daft Punk
        </p>
      </div>
    </footer>
  );
}
