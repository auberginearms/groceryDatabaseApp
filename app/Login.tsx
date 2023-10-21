import { ReactElement, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { credentialsAreValid } from "@/server/getCredentials";
import styled from "styled-components";
import { PageHeader } from "./ui/PageHeader";
import { FormGroup } from "./ui/FormGroup";

export function Login(props: { onLoginSuccess: () => void }): ReactElement {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { onLoginSuccess } = props;
  const [displayInvalidMessage, setDisplayInvalidMessage] = useState(false);
  return (
    <Wrapper>
      {displayInvalidMessage ? "Invalid login details" : null}

      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PageHeader>Let&apos;s find some deals</PageHeader>

        <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label style={{ marginBottom: 10 }}>Username</Form.Label>
          <FormControl
            type="text"
            placeholder="enter your username"
            value={username}
            onChange={(e) => {
              const newUsername = e.target.value;
              setUsername(newUsername);
            }}
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{ marginBottom: 10 }}>Password</Form.Label>

          <FormControl
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => {
              const newPassword = e.target.value;
              setPassword(newPassword);
            }}
          />
        </FormGroup>
      </Form>
      <Button
        style={{ margin: 10 }}
        onClick={async () => {
          if (await credentialsAreValid(username, password)) {
            onLoginSuccess();
          } else {
            setDisplayInvalidMessage(true);
          }
        }}
      >
        Login
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  color: #fff;
`;

const FormControl = styled(Form.Control)`
  width: 160px;
  height: 32px;
  background: #B5A8A8;
}}`;
