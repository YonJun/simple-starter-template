/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";

const BgImage = styled.div`
  display: block;

  &::after {
    content: "";
    background-image: url("/assets/images/thumb.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  ${tw`w-full min-h-screen h-auto`}
`;
const Backdrop = styled.div`
  background: rgb(5, 7, 41, 0.8);
  ${tw`w-full min-h-screen h-auto`}
`;
const BodyBackground = ({ children }) => (
  <BgImage>
    <Backdrop>{children}</Backdrop>
  </BgImage>
);

export default BodyBackground;
