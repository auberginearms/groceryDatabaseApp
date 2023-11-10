import { ReactElement, useState } from "react";
import { Wrapper } from "./ui/Wrapper";
import { Deals } from "./Deals";
import { Stores } from "./Stores";
import { redActiveButton, greyInactiveButton } from "./ui/colourLibrary";
import { LargeButton } from "./ui/LargeButton";

enum TabDisplay {
  Deals,
  Locations,
}

export function TabNavigation(): ReactElement {
  const [displayTab, setdisplayTab] = useState(TabDisplay.Deals);

  return (
    <Wrapper>
      <div style={{ display: "flex" }}>
        <LargeButton
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
      {displayTab === TabDisplay.Locations && <Stores />}
    </Wrapper>
  );
}
