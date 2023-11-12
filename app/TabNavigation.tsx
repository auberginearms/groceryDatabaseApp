import { ReactElement, useState } from "react";
import { Button } from "react-bootstrap";
import { Wrapper } from "./ui/Wrapper";
import { Deals } from "./Deals";
import { Locations } from "./Locations";
import { redActiveButton, greyInactiveButton, black } from "./ui/colourLibrary";
import { LargeButton } from "./ui/LargeButton";

enum TabDisplay {
  Deals,
  Locations,
}

export function TabNavigation(): ReactElement {
  const [displayTab, setdisplayTab] = useState(TabDisplay.Deals);

  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          backgroundColor: black,
          alignSelf: "stretch",
          justifyContent: "center",
        }}
      >
        <LargeButton
          width={150}
          backgroundColor={
            displayTab === TabDisplay.Deals
              ? redActiveButton
              : greyInactiveButton
          }
          onClick={() => {
            setdisplayTab(TabDisplay.Deals);
          }}
        >
          Deals
        </LargeButton>
        <LargeButton
          width={150}
          backgroundColor={
            displayTab === TabDisplay.Locations
              ? redActiveButton
              : greyInactiveButton
          }
          onClick={() => {
            setdisplayTab(TabDisplay.Locations);
          }}
        >
          Locations
        </LargeButton>
      </div>
      {displayTab === TabDisplay.Deals && <Deals />}
      {displayTab === TabDisplay.Locations && <Locations />}
    </Wrapper>
  );
}
