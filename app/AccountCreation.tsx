import { ReactElement, useState } from "react";
import { PageHeader } from "./ui/PageHeader";
import { FormGroup } from "./ui/FormGroup";
import { Wrapper } from "./ui/Wrapper";
import { StyledForm } from "./ui/StyledForm";
import { FormLabel } from "./ui/FormLabel";
import { FormControl } from "./ui/FormControl";
import { usernameAlreadyExists } from "@/server/usernameAlreadyExists";
import { LargeButton } from "./ui/LargeButton";
import { createNewAccount } from "@/server/createNewAccount";

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
            onChange={setUsername}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Password</FormLabel>

          <FormControl
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={setPassword}
          />
        </FormGroup>
      </StyledForm>
      <LargeButton
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
          createNewAccount(username, password);
          onSubmitSuccess();
        }}
      >
        Submit
      </LargeButton>
      <LargeButton onClick={onGoBackClick}>Go back</LargeButton>
    </Wrapper>
  );
}
