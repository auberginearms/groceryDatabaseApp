import { ReactElement, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { credentialsAreValid } from "@/server/getCredentials";
import styled from "styled-components";
import { StyledFormGroup, PageHeaderStyling } from "./utils";

export function Login(props: { onLoginSuccess: () => void }): ReactElement {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { onLoginSuccess } = props;

  return (
    <StyledLogin>
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
        <PageHeaderStyling>Let&apos;s find some deals</PageHeaderStyling>
        <div style={{ height: "50px" }}></div>

        <StyledFormGroup className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label style={{ marginBottom: 10 }}>Username</Form.Label>
          <StyledFormControl
            type="text"
            placeholder="enter your username"
            value={username}
            onChange={(e) => {
              const newUsername = e.target.value;
              setUsername(newUsername);
            }}
          />
        </StyledFormGroup>

        <StyledFormGroup
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label style={{ marginBottom: 10 }}>Password</Form.Label>

          <StyledFormControl
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => {
              const newPassword = e.target.value;
              setPassword(newPassword);
            }}
          />
        </StyledFormGroup>
      </Form>
      <Button
        style={{ margin: 10 }}
        onClick={async () => {
          if (await credentialsAreValid(username, password)) {
            onLoginSuccess();
          }
        }}
      >
        Login
      </Button>
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  color: #fff;
`;

const StyledFormControl = styled(Form.Control)`
  width: 160px;
  height: 32px;
  background: #B5A8A8;
}}`;
