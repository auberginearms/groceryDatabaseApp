import { ReactElement } from "react";
import { Button } from "react-bootstrap";

export function Welcome(props: { onLogout: () => void }): ReactElement {
  const { onLogout } = props;
  return (
    <div style={{ display: "flex" }}>
      SUCCESS
      <Button
        onClick={() => {
          onLogout();
        }}
      >
        Log out
      </Button>
    </div>
  );
}
