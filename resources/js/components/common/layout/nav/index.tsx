import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import route from "ziggy-js";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="{{ url('/') }}">
          Bookmark
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="{{ __('Toggle navigation') }}"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a href={route("bookmarks.index")} className="nav-link">
                Bookmarks
              </a>
            </li>
            <li className="nav-item">
              <InertiaLink href={route("bookmark.add")} className="nav-link">
                Bookmark Add
              </InertiaLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <InertiaLink
                href={route("logout")}
                method="post"
                className="nav-link"
              >
                Logout
              </InertiaLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
