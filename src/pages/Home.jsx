/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { Fragment } from "react";
import Cover from "../components/Cover";

const Home = () => {
  return (
    <Fragment>
      <div tw="text-white">
        <div tw="font-black">
          <h2 tw="text-5xl">SIMPLE STARTER</h2>
          <h1 tw="text-8xl text-primary">TEMPLATE</h1>
        </div>
        <p tw="text-2xl lg:w-10/12 mb-6">
          A clean simple desktop design with space to add & alter items instead
          of removing them. An easy to use starting point for beginners to make
          mockups or designs that look nice, quickly.
        </p>
        <button tw="py-3 px-20 border border-white rounded-lg uppercase text-xl font-bold text-sm">
          learn more
        </button>

        <div tw="mt-20 grid grid-flow-col grid-cols-4 gap-16">
          {[...new Array(4).keys()].map((index) => (
            <div tw="p-1 bg-white rounded-lg">
              <Cover
                key={index}
                srcImg={`https://picsum.photos/250/25${index}`}
              />
            </div>
          ))}
        </div>
        <div tw="mt-14">
          <h2 tw="uppercase font-black text-5xl">news</h2>
          <p tw="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            accumsan sed diam ut consectetur. Nunc maximus magna dolor, eget
            accumsan leo tempor eget.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
