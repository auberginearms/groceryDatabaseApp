import { ReactElement, useState } from "react";
import { Button } from "react-bootstrap";
import { PageHeader } from "./ui/PageHeader";
import { FormGroup } from "./ui/FormGroup";
import { Wrapper } from "./ui/Wrapper";
import { StyledForm } from "./ui/StyledForm";
import { FormLabel } from "./ui/FormLabel";
import { FormControl } from "./ui/FormControl";
import { usernameAlreadyExists } from "@/server/usernameAlreadyExists";

export function AccountCreation(props: {
  onGoBackClick: () => void;
  onSubmitSuccess: () => void;
}): ReactElement {
  const { onGoBackClick, onSubmitSuccess } = props;
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
        style={{
          height: 32,
          margin: 10,
          backgroundColor: "#B5A8A8",
          borderRadius: 12,
          fontSize: 12,
        }}
        onClick={async () => {
          if (username === "") {
            return setErrorMessage("Username cannot be empty");
          }
          if (password === "") {
            return setErrorMessage("Password cannot be empty");
          }
          if (await usernameAlreadyExists(username)) {
            return setErrorMessage("Username already exists");
          }
          setErrorMessage("");
          console.log("create account");
          onSubmitSuccess();
        }}
      >
        Submit
      </Button>
      <Button
        style={{
          height: 32,
          margin: 10,
          backgroundColor: "#B5A8A8",
          borderRadius: 12,
          fontSize: 12,
        }}
        onClick={() => {
          onGoBackClick();
        }}
      >
        Go Back
      </Button>
    </Wrapper>
  );
}
