/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li tw="bg-primary">
            <Link to="/">Home</Link>
          </li>
          <li tw="bg-primary">
            <Link to="/about">About</Link>
          </li>
          <li tw="bg-secondary">
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
