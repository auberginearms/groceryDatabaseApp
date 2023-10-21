import { ReactElement } from "react";
import { Button } from "react-bootstrap";
import { PageHeaderStyling } from "./utils";
import styled from "styled-components";

export function Welcome(props: { onLogout: () => void }): ReactElement {
  const { onLogout } = props;
  return (
    <StyledWelcomePage>
      <PageHeaderStyling>Welcome</PageHeaderStyling>

      <Button
        onClick={() => {
          onLogout();
        }}
      >
        Log out
      </Button>
      <Button>Delete account</Button>
    </StyledWelcomePage>
  );
}

const StyledWelcomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
