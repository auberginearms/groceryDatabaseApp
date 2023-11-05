import { ReactElement, useState } from "react";
import { PageHeader } from "./ui/PageHeader";
import { Wrapper } from "./ui/Wrapper";
import { ViewLocations } from "./ViewLocations";
import { CreateLocations } from "./CreateLocations";
import { LargeButton } from "./ui/LargeButton";
import { Button } from "react-bootstrap";
import { greenActiveButton, greyInactiveButton } from "./ui/colourLibrary";

enum LocationPage {
  View,
  Create,
}

export function Locations(): ReactElement {
  const [locationPage, setLocationPage] = useState(LocationPage.View);

  return (
    <Wrapper>
      {locationPage === LocationPage.View && (
        <ViewLocations
          onCreateClick={() => {
            setLocationPage(LocationPage.Create);
          }}
        />
      )}
      {locationPage === LocationPage.Create && (
        <CreateLocations
          onCancelClick={() => {
            setLocationPage(LocationPage.View);
          }}
          onCreateLocationClick={() => {
            setLocationPage(LocationPage.View);
          }}
        />
      )}
    </Wrapper>
  );
}
