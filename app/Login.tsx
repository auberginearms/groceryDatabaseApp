import { ReactElement, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { credentialsAreValid } from "@/server/getCredentials";
import { PageHeader } from "./ui/PageHeader";
import { FormGroup } from "./ui/FormGroup";
import { FormControl } from "./ui/FormControl";
import { Wrapper } from "./ui/Wrapper";
import { FormLabel } from "./ui/FormLabel";
import { StyledForm } from "./ui/StyledForm";

export function Login(props: {
  onLoginSuccess: () => void;
  onAccountCreationClick: () => void;
}): ReactElement {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { onLoginSuccess, onAccountCreationClick } = props;
  const [displayInvalidMessage, setDisplayInvalidMessage] = useState(false);
  return (
    <Wrapper>
      {displayInvalidMessage ? "Invalid login details" : null}

      <StyledForm>
        <PageHeader>Let&apos;s find some deals</PageHeader>

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
          if (await credentialsAreValid(username, password)) {
            onLoginSuccess();
          } else {
            setDisplayInvalidMessage(true);
          }
        }}
      >
        Login
      </Button>
      <Button
        style={{ margin: 10 }}
        onClick={() => {
          onAccountCreationClick();
        }}
      >
        Create account
      </Button>
    </Wrapper>
  );
}
