import { ReactElement, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { userNameAlreadyExists } from "@/server/getCredentials";
import styled from "styled-components";
import { PageHeader } from "./ui/PageHeader";
import { FormGroup } from "./ui/FormGroup";
import { FormControl } from "./ui/FormControl";

export function AccountCreation(props: {
  backToLogin: () => void;
}): ReactElement {
  const { backToLogin } = props;
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AccountCreationStyling>
      {errorMessage}
      <div style={{ height: "20px" }}></div>
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PageHeader>Create your account</PageHeader>

        <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
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

        <FormGroup
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
        onClick={async () => {
          if (await userNameAlreadyExists(username)) {
            return setErrorMessage("Username already exists");
          }
          if (username === "") {
            return setErrorMessage("Username cannot be empty");
          }
          if (password === "") {
            return setErrorMessage("Password cannot be empty");
          }
          if (username === "" && password === "") {
            return setErrorMessage("Username and password cannot be empty");
          } else {
            setErrorMessage("");
            console.log("create account");
          }
        }}
      >
        Submit
      </Button>
      <div style={{ height: "28px" }}></div>
      <Button
        onClick={() => {
          backToLogin();
        }}
      >
        Go Back
      </Button>
    </AccountCreationStyling>
  );
}

const AccountCreationStyling = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  color: #fff;
`;
