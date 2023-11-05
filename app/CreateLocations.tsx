import { ReactElement } from "react";
import { Wrapper } from "./ui/Wrapper";
import { Button } from "react-bootstrap";
import { greenActiveButton, greyInactiveButton } from "./ui/colourLibrary";
import { LargeButton } from "./ui/LargeButton";

export function CreateLocations(props: {
  onCreateLocationClick: () => void;
  onCancelClick: () => void;
}): ReactElement {
  const { onCreateLocationClick, onCancelClick } = props;
  return (
    <Wrapper>
      Create Locations
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
