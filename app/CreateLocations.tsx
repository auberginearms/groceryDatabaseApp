import { ReactElement, useState } from "react";
import { Wrapper } from "./ui/Wrapper";
import { Button } from "react-bootstrap";
import { greenActiveButton, greyInactiveButton } from "./ui/colourLibrary";
import { LargeButton } from "./ui/LargeButton";
import { StyledForm } from "./ui/StyledForm";
import { PageHeader } from "./ui/PageHeader";
import { FormLabel } from "./ui/FormLabel";
import { FormGroup } from "./ui/FormGroup";
import { FormControl } from "./ui/FormControl";

export function CreateLocations(props: {
  onCreateLocationClick: () => void;
  onCancelClick: () => void;
}): ReactElement {
  const [errorMessage, setErrorMessage] = useState("");

  const [displayName, setdisplayName] = useState("");
  const [fullName, setFullName] = useState("");
  const [suburb, setSuburb] = useState("");

  const { onCreateLocationClick, onCancelClick } = props;
  return (
    <Wrapper>
      <PageHeader> Create Location</PageHeader>
      <div>
        <StyledForm>
          <FormGroup>
            <FormLabel>Display name</FormLabel>
            <FormControl
              type="text"
              placeholder="enter display name of store"
              value={displayName}
              onChange={(e) => {
                const newDisplayName = e.target.value;
                setdisplayName(newDisplayName);
              }}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Full name</FormLabel>

            <FormControl
              type="text"
              placeholder="enter full name of store"
              value={fullName}
              onChange={(e) => {
                const newFullName = e.target.value;
                setFullName(newFullName);
              }}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Suburb</FormLabel>

            <FormControl
              type="text"
              placeholder="enter suburb"
              value={suburb}
              onChange={(e) => {
                const newSuburb = e.target.value;
                setSuburb(newSuburb);
              }}
            />
          </FormGroup>
        </StyledForm>
      </div>
      {errorMessage}

      <div style={{ display: "flex" }}>
        <LargeButton
          onClick={() => {
            onCancelClick();
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
            // if (await storeAlreadyExists(displayName,fullName,suburb)) {
            //   return setErrorMessage("Store already exists");
            // }
            onCreateLocationClick();

            console.log("dummy location creation");
          }}
          backgroundColor={greenActiveButton}
        >
          Create
        </LargeButton>
      </div>
    </Wrapper>
  );
}
