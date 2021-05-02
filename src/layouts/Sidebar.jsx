/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const ITEM_HEIGHT = 65;

const Li = styled.li`
  height: ${ITEM_HEIGHT}px;
  line-height: ${ITEM_HEIGHT}px;

  .selected::after {
    content: "";
    position: absolute;
    ${tw`bg-primary`}
    position: absolute;
    width: ${ITEM_HEIGHT}px;
    top: 10px;
    height: ${ITEM_HEIGHT - 20}px;
    border-radius: 10px;
    left: -${ITEM_HEIGHT - 5}px;
  }
  .selected {
    ${tw`text-primary`}
  }
`;

const Sidebar = () => {
  return (
    <Fragment>
      <nav tw="grid grid-cols-6">
        <ul tw="col-span-5 text-center  text-white uppercase font-semibold">
          <li tw="my-14 font-black text-2xl">
            <span tw="text-primary">your</span>logo
          </li>
          <Li tw="block relative">
            <NavLink exact activeClassName="selected" to="/">
              Home
            </NavLink>
          </Li>
          <Li tw="block relative">
            <NavLink exact activeClassName="selected" to="/about">
              About
            </NavLink>
          </Li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
