/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";

const Cover = styled.div`
  background-image: ${({ srcImg }) => `url("${srcImg}")`};
  background-repeat: no-repeat;
  background-position: center center;
  ${tw`w-full rounded`}
  height:${({ height }) => (height ? `${height}px` : "120px")};
`;
export default Cover;
