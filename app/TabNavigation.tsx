import { ReactElement, useState } from "react";
import { Button } from "react-bootstrap";
import { PageHeader } from "./ui/PageHeader";
import styled from "styled-components";
import { Wrapper } from "./ui/Wrapper";
import { Deals } from "./Deals";
import { Location } from "./Location";

enum TabDisplay {
  Deals,
  Location,
}

export function TabNavigation(props: { onLogout: () => void }): ReactElement {
  const { onLogout } = props;
  const [displayTab, setdisplayTab] = useState(TabDisplay.Deals);

  return (
    <Wrapper>
      <div style={{ flexDirection: "row" }}>
        <Button
          style={{
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
            backgroundColor:
              displayTab === TabDisplay.Location ? "#E86868" : "#B5A8A8",
          }}
          onClick={() => {
            setdisplayTab(TabDisplay.Location);
          }}
        >
          Location
        </Button>
      </div>
      {displayTab === TabDisplay.Deals && <Deals />}
      {displayTab === TabDisplay.Location && <Location />}
      <div>
        <Button
          onClick={() => {
            onLogout();
          }}
        >
          Log out
        </Button>
        <Button>Delete account</Button>
      </div>
    </Wrapper>
  );
}
