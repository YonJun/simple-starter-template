/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import { Fragment } from "react";

const Paragraph = styled.p`
  ${tw`mb-6`}
`;

const FirstItem = () => {
  return (
    <Fragment>
      <div tw="bg-gray-200 rounded-3xl p-10 grid grid-cols-8 gap-5">
        <div tw="col-span-5 text-2xl">
          <p tw="font-black text-4xl mb-8 ">
            <span tw="border-b-4 border-primary">AND</span> A CLEAN PAGE
          </p>

          <Paragraph tw="font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            ornare libero mi, eget pharetra nibh lacinia at. Interdum et
            malesuada fames ac ante ipsum primis in faucibus.
          </Paragraph>

          <Paragraph>
            Donec mi sapien, pellentesque ac diam quis, porttitor sodales ante.
            Sed vitae porttitor quam. Sed aliquet blandit est vitae vehicula.
            Pellentesque vitae faucibus dolor.
          </Paragraph>

          <p tw="font-black">Free, Help Yourself</p>
          <Paragraph>
            Duis non turpis placerat, blandit neque ac, convallis erat. Duis
            lacinia elit non augue pellentesque, nec suscipit orci iaculis.
            Donec ut mauris ligula. Nulla sed ante orci. Nulla sit amet est
            luctus, maximus lorem varius, fringilla turpis. Nulla vel mollis
            enim, in suscipit nisi. Suspendisse potenti. Nunc non lorem sit amet
            ex dapibus varius id vitae lorem.
          </Paragraph>

          <p tw="font-black">Easy to Customize</p>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            ornare libero mi, eget pharetra nibh lacinia at. Interdum et
            malesuada fames ac ante ipsum primis in faucibus.
          </Paragraph>
          {[...new Array(5).keys()].map((i) => (
            <Fragment key={i}>
              <p tw="font-black">Easy to Customize</p>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ornare libero mi, eget pharetra nibh lacinia at.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </Paragraph>
            </Fragment>
          ))}
        </div>

        <div tw="col-span-3">image</div>
      </div>
    </Fragment>
  );
};

export default FirstItem;
