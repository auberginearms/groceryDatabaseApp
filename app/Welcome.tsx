import { ReactElement } from "react";
import { Button } from "react-bootstrap";

export function Welcome(props: { onLogout: () => void }): ReactElement {
  const { onLogout } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: "#FFF",
        fontSize: "20px",
        alignItems: "center",
      }}
    >
      Welcome
      <Button
        onClick={() => {
          onLogout();
        }}
      >
        Log out
      </Button>
      <Button>Delete account</Button>
    </div>
  );
}
