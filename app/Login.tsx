import { ReactElement, useState } from "react";
import { PageHeader } from "./ui/PageHeader";
import { FormGroup } from "./ui/FormGroup";
import { credentialsAreValid } from "@/server/credentialsAreValid";
import { Wrapper } from "./ui/Wrapper";
import { StyledForm } from "./ui/StyledForm";
import { FormLabel } from "./ui/FormLabel";
import { FormControl } from "./ui/FormControl";
import { LargeButton } from "./ui/LargeButton";

export function Login(props: {
  onLoginSuccess: () => void;
  onAccountCreationClick: () => void;
  displayAccountCreatedMessage: string | null;
}): ReactElement {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {
    onLoginSuccess,
    onAccountCreationClick,
    displayAccountCreatedMessage,
  } = props;
  const [displayInvalidMessage, setDisplayInvalidMessage] = useState(false);

  return (
    <Wrapper>
      {displayInvalidMessage ? "Invalid login details" : null}
      {displayAccountCreatedMessage}
      <StyledForm>
        <PageHeader>Let&apos;s find some deals</PageHeader>

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
          if (await credentialsAreValid(username, password)) {
            onLoginSuccess();
          } else {
            setDisplayInvalidMessage(true);
          }
        }}
      >
        Log in
      </LargeButton>
      <LargeButton onClick={onAccountCreationClick}>Create account</LargeButton>
    </Wrapper>
  );
}
