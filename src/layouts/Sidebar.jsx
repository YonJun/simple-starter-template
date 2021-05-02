import { Fragment } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
