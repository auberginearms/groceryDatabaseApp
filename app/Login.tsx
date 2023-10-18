import { ReactElement, useState } from "react";
import { Credentials } from "./types";
import { Button, Form } from "react-bootstrap";
import { getCredentials, validLoginDetails } from "@/server/getCredentials";

async function logCredentials(): Promise<void> {
  console.log("a potato");
  const credentials = await getCredentials();
  console.log(credentials);
}

function credentialsAreValid(
  validLoginDetails: Credentials[],
  inputUsername: string,
  inputPassword: string
) {
  const elementWithMatchingUsername = validLoginDetails.find((loginDetails) => {
    return loginDetails.username === inputUsername;
  });

  if (elementWithMatchingUsername === undefined) {
    return;
  }

  return elementWithMatchingUsername.password === inputPassword;
}

export function Login(props: { onLoginSuccess: () => void }): ReactElement {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { onLoginSuccess } = props;

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        verticalAlign: "middle",
        alignSelf: "center",
        flexGrow: 1,
      }}
    >
      <Form
        style={{
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          verticalAlign: "middle",
          alignSelf: "center",
          flexGrow: 1,
        }}
      >
        <div style={{ fontSize: "6vw" }}>Let's find some deals</div>
        <div style={{ height: "50px" }}></div>

        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
          style={{ display: "flex", flexDirection: "column", flexGrow: 4 }}
        >
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter your username"
            value={username}
            onChange={(e) => {
              const newUsername = e.target.value;
              setUsername(newUsername);
            }}
          />
        </Form.Group>

        <hr />

        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => {
              const newPassword = e.target.value;
              setPassword(newPassword);
            }}
          />
        </Form.Group>
        <div style={{ height: "50px" }}></div>
      </Form>
      <Button
        onClick={async () => {
          await logCredentials();
          if (credentialsAreValid(await getCredentials(), username, password)) {
            onLoginSuccess();
          }
        }}
      >
        Login
      </Button>
    </div>
  );
}
