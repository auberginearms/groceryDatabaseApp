import { ReactElement, useState } from "react";
import { Wrapper } from "./ui/Wrapper";
import { greenActiveButton, greyInactiveButton } from "./ui/colourLibrary";
import { LargeButton } from "./ui/LargeButton";
import { StyledForm } from "./ui/StyledForm";
import { PageHeader } from "./ui/PageHeader";
import { FormLabel } from "./ui/FormLabel";
import { FormGroup } from "./ui/FormGroup";
import { FormControl } from "./ui/FormControl";

export function UpdateStores(props: {
  onUpdateStoreClick: () => void;
  onBackClick: () => void;
  //   prefilledDisplayName: string;
  //   prefilledFullName: string;
  //   prefilledSuburb: string;
}): ReactElement {
  const [
    errorMessage,
    setErrorMessage,
    // prefilledDisplayName,
    // prefilledFullName,
    // prefilledSuburb,
  ] = useState("");

  const [displayName, setdisplayName] = useState("");
  const [fullName, setFullName] = useState("");
  const [suburb, setSuburb] = useState("");

  const { onUpdateStoreClick, onBackClick } = props;
  return (
    <Wrapper>
      <PageHeader> STORE NAME</PageHeader>
      <div>
        <StyledForm>
          <FormGroup>
            <FormLabel>Display name</FormLabel>
            <FormControl
              type="text"
              placeholder="enter display name of store"
              value={displayName}
              onChange={setdisplayName}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Full name</FormLabel>

            <FormControl
              type="text"
              placeholder="enter full name of store"
              value={fullName}
              onChange={setFullName}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Suburb</FormLabel>

            <FormControl
              type="text"
              placeholder="enter suburb"
              value={suburb}
              onChange={setSuburb}
            />
          </FormGroup>
        </StyledForm>
      </div>
      {errorMessage}

      <div style={{ display: "flex" }}>
        <LargeButton
          onClick={() => {
            onBackClick();
          }}
          backgroundColor={greyInactiveButton}
        >
          Cancel
        </LargeButton>
        <LargeButton
          onClick={() => {
            if (displayName === "") {
              return setErrorMessage("Display name cannot be empty");
            }
            if (fullName === "") {
              return setErrorMessage("Full name cannot be empty");
            }
            if (suburb === "") {
              return setErrorMessage("Suburb cannot be empty");
            }
            onUpdateStoreClick();
          }}
          backgroundColor={greenActiveButton}
        >
          Update
        </LargeButton>
      </div>
    </Wrapper>
  );
}
