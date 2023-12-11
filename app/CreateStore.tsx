import { ReactElement, useState } from "react";
import { Wrapper } from "./ui/Wrapper";
import { greenActiveButton, greyInactiveButton } from "./ui/colourLibrary";
import { LargeButton } from "./ui/LargeButton";
import { StyledForm } from "./ui/StyledForm";
import { PageHeader } from "./ui/PageHeader";
import { FormLabel } from "./ui/FormLabel";
import { FormGroup } from "./ui/FormGroup";
import { FormControl } from "./ui/FormControl";
import { createNewStore } from "@/server/createNewStore";
import { displayNameAndSuburbAlreadyExist } from "@/server/displayNameAndSuburbAlreadyExists";
import { fullNameAndSuburbAlreadyExist } from "@/server/fullNameAndSuburbAlreadyExist";

export function CreateStore(props: {
  onCreateStoreClick: () => void;
  onCancelClick: () => void;
}): ReactElement {
  const [errorMessage, setErrorMessage] = useState("");

  const [displayName, setDisplayName] = useState("");
  const [fullName, setFullName] = useState("");
  const [suburb, setSuburb] = useState("");

  const { onCreateStoreClick, onCancelClick } = props;
  const setDisplayNameAndFullName = (displayName: string) => {
    setDisplayName(displayName);
    setFullName(displayName);
  };
  return (
    <Wrapper>
      <PageHeader> Create Store</PageHeader>
      <div>
        <StyledForm>
          <FormGroup>
            <FormLabel>Display name</FormLabel>
            <FormControl
              type="text"
              placeholder="enter display name of store"
              value={displayName}
              onChange={
                displayName === fullName
                  ? setDisplayNameAndFullName
                  : setDisplayName
              }
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
          onClick={onCancelClick}
          backgroundColor={greyInactiveButton}
        >
          Cancel
        </LargeButton>
        <LargeButton
          onClick={async () => {
            if (displayName === "") {
              return setErrorMessage("Display name cannot be empty");
            }
            if (fullName === "") {
              return setErrorMessage("Full name cannot be empty");
            }
            if (suburb === "") {
              return setErrorMessage("Suburb cannot be empty");
            }
            if (await displayNameAndSuburbAlreadyExist(displayName, suburb)) {
              return setErrorMessage(
                "Display name and suburb combination already exists"
              );
            }
            if (await fullNameAndSuburbAlreadyExist(fullName, suburb)) {
              return setErrorMessage(
                "Full name and suburb combination already exists"
              );
            }
            setErrorMessage("");
            onCreateStoreClick();
            createNewStore(displayName, fullName, suburb);
          }}
          backgroundColor={greenActiveButton}
        >
          Create
        </LargeButton>
      </div>
    </Wrapper>
  );
}
