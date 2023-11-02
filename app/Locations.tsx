import { ReactElement, useState } from "react";
import { PageHeader } from "./ui/PageHeader";
import { Wrapper } from "./ui/Wrapper";
import { ViewLocations } from "./ViewLocations";

enum LocationPage {
  View,
}

export function Locations(): ReactElement {
  const [locationPage, setLocationPage] = useState(LocationPage.View);

  return (
    <Wrapper>{locationPage === LocationPage.View && <ViewLocations />}</Wrapper>
  );
}
