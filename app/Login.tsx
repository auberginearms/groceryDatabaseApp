import { ReactElement, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { credentialsAreValid } from "@/server/getCredentials";

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
        justifyContent: "center",
        margin: "auto",
        color: "#FFF",
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
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <div style={{ fontSize: "20px" }}>Let&apos;s find some deals</div>
        <div style={{ height: "50px" }}></div>

        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 4,
            fontSize: "12px",
          }}
        >
          <Form.Label>Username</Form.Label>
          <div style={{ height: "10px" }}></div>
          <Form.Control
            style={{
              width: "160px",
              height: "32px",
              flexShrink: "0",
              background: "#B5A8A8",
            }}
            type="text"
            placeholder="enter your username"
            value={username}
            onChange={(e) => {
              const newUsername = e.target.value;
              setUsername(newUsername);
            }}
          />
        </Form.Group>

        <div style={{ height: "20px" }}></div>

        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
          style={{
            display: "flex",
            flexDirection: "column",

            fontSize: "12px",
          }}
        >
          <Form.Label>Password</Form.Label>
          <div style={{ height: "10px" }}></div>

          <Form.Control
            style={{
              width: "160px",
              height: "32px",
              flexShrink: "0",
              background: "#B5A8A8",
            }}
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => {
              const newPassword = e.target.value;
              setPassword(newPassword);
            }}
          />
          <div style={{ height: "28px" }}></div>
        </Form.Group>
        <div style={{ height: "50px" }}></div>
      </Form>
      <Button
        onClick={async () => {
          if (await credentialsAreValid(username, password)) {
            onLoginSuccess();
          }
        }}
      >
        Login
      </Button>
    </div>
  );
}
