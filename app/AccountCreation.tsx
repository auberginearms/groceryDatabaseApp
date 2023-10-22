import { ReactElement, useState } from "react";
import { Button } from "react-bootstrap";
import { usernameAlreadyExists } from "@/server/usernameAlreadyExists";
import { PageHeader } from "./ui/PageHeader";
import { FormGroup } from "./ui/FormGroup";
import { FormControl } from "./ui/FormControl";
import { Wrapper } from "./ui/Wrapper";
import { FormLabel } from "./ui/FormLabel";
import { StyledForm } from "./ui/StyledForm";

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
      <StyledForm>
        <PageHeader>Create your account</PageHeader>

        <FormGroup>
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

        <FormGroup>
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
      </StyledForm>
      <Button
        style={{ margin: 10 }}
        onClick={async () => {
          if (username === "") {
            return setErrorMessage("Username cannot be empty");
          }
          if (password === "") {
            return setErrorMessage("Password cannot be empty");
          }
          if (username === "" && password === "") {
            return setErrorMessage("Username and password cannot be empty");
          }
          if (await usernameAlreadyExists(username)) {
            return setErrorMessage("Username already exists");
          }
          {
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
