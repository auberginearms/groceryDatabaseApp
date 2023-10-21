import { ReactElement } from "react";
import { Button } from "react-bootstrap";
import { PageHeader } from "./ui/PageHeader";
import styled from "styled-components";

export function Welcome(props: { onLogout: () => void }): ReactElement {
  const { onLogout } = props;
  return (
    <StyledWelcomePage>
      <PageHeader>Welcome</PageHeader>

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
