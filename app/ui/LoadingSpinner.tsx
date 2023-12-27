import { ReactElement, ReactNode, useState } from "react";
import { loadingRed } from "./colourLibrary";
import styled, { keyframes } from "styled-components";

export function LoadingSpinner(props: {
  width?: number;
  height?: number;
}): ReactElement {
  const { height, width } = props;
  return (
    <StyledDiv
      style={{
        height,
        width,
      }}
    ></StyledDiv>
  );
}

const spin = keyframes` 
0% {
  rotate: 0deg;
}
100% {
  rotate: 360deg;
}
`;

const StyledDiv = styled.div`
  animation: 1s linear infinite ${spin};
  border-radius: 50px;
  border: ${loadingRed};
  border-style: dashed;
  height: 20px;
  width: 20px;
`;
