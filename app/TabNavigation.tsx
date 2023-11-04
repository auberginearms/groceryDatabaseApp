import { ReactElement, useState } from "react";
import { Button } from "react-bootstrap";
import { Wrapper } from "./ui/Wrapper";
import { Deals } from "./Deals";
import { Locations } from "./Locations";

enum TabDisplay {
  Deals,
  Locations,
}

export function TabNavigation(): ReactElement {
  const [displayTab, setdisplayTab] = useState(TabDisplay.Deals);

  return (
    <Wrapper>
      <div style={{ flexDirection: "row" }}>
        <Button
          style={{
            height: 32,
            width: 150,
            margin: 10,
            borderRadius: 12,
            fontSize: 12,
            backgroundColor:
              displayTab === TabDisplay.Deals ? "#E86868" : "#B5A8A8",
          }}
          onClick={() => {
            setdisplayTab(TabDisplay.Deals);
          }}
        >
          Deals
        </Button>
        <Button
          style={{
            height: 32,
            width: 150,
            margin: 10,
            borderRadius: 12,
            fontSize: 12,
            backgroundColor:
              displayTab === TabDisplay.Locations ? "#E86868" : "#B5A8A8",
          }}
          onClick={() => {
            setdisplayTab(TabDisplay.Locations);
          }}
        >
          Locations
        </Button>
      </div>
      {displayTab === TabDisplay.Deals && <Deals />}
      {displayTab === TabDisplay.Locations && <Locations />}
    </Wrapper>
  );
}
