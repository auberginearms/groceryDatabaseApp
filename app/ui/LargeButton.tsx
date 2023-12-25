import { ReactElement, ReactNode, useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { greyButtonBackground } from "./colourLibrary";

export function LargeButton(props: {
  onClick: () => void;
  children: ReactNode;
  backgroundColor?: string;
  width?: number;
  isLoading?: boolean;
  isDisabled?: boolean;
}): ReactElement {
  const { onClick, children, backgroundColor, width, isLoading, isDisabled } =
    props;
  return (
    <Button
      style={{
        height: 32,
        margin: 10,
        backgroundColor:
          backgroundColor !== undefined
            ? backgroundColor
            : greyButtonBackground,
        borderRadius: 12,
        fontSize: 12,
        border: "none",
        width,
      }}
      onClick={() => {
        onClick();
      }}
      disabled={isDisabled}
    >
      {isLoading ? "Loading" : children}
    </Button>
  );
}
