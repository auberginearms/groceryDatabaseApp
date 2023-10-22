import { ReactElement, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { userNameAlreadyExists } from "@/server/getCredentials";
import { PageHeader } from "./ui/PageHeader";
import { FormGroup } from "./ui/FormGroup";
import { FormControl } from "./ui/FormControl";
import { Wrapper } from "./ui/Wrapper";
import { FormLabel } from "./ui/FormLabel";

export function AccountCreation(props: {
  onGoBackClick: () => void;
}): ReactElement {
  const { onGoBackClick } = props;
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
      {errorMessage}
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PageHeader>Create your account</PageHeader>

        <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
          <FormLabel>Username</FormLabel>
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
          <FormLabel>Password</FormLabel>

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
      <Button
        style={{ margin: 10 }}
        onClick={() => {
          onGoBackClick();
        }}
      >
        Go Back
      </Button>
    </Wrapper>
  );
}
