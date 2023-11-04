import { ReactElement, ReactNode } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

export function LargeButton(props: {
  onClick: () => void;
  children: ReactNode;
}): ReactElement {
  const { onClick, children } = props;
  return (
    <Button
      style={{
        height: 32,
        margin: 10,
        backgroundColor: "#b5a8a8",
        borderRadius: 12,
        fontSize: 12,
        border: "none",
      }}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </Button>
  );
}
