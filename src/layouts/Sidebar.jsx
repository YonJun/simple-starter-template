/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

const ITEM_HEIGHT = 65;

const Container = styled.div`
  line-height: ${ITEM_HEIGHT}px;
`;

const Li = styled.li`
  height: ${ITEM_HEIGHT}px;

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
      <Container tw="flex flex-col justify-between h-full lg:w-10/12  text-center">
        <nav>
          <ul tw="text-white uppercase font-semibold">
            <li tw="my-14 font-black text-2xl">
              <span tw="text-primary">your</span>logo
            </li>
            <Li tw="block relative">
              <NavLink exact activeClassName="selected" to="/">
                Home
              </NavLink>
            </Li>
            <Li tw="block relative">
              <NavLink exact activeClassName="selected" to="/item1">
                Item 1
              </NavLink>
            </Li>
            {[...new Array(4).keys()].map((i) => (
              <Li tw="block relative" key={i}>
                <Link exact to={`/${i}`}>
                  Item {i + 2}
                </Link>
              </Li>
            ))}
          </ul>
        </nav>
        <nav tw="mb-10 uppercase text-gray-300">
          <ul>
            <li>support</li>
          </ul>
          <ul tw="mb-5">
            <li>contact</li>
          </ul>
          <ul tw="text-gray-500">
            <li>©2020 ACME LLC.</li>
          </ul>
        </nav>
      </Container>
    </Fragment>
  );
};

export default Sidebar;
