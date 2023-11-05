import { ReactElement } from "react";
import { Wrapper } from "./ui/Wrapper";
import { styled } from "styled-components";
import { Location } from "./types";
import {
  darkGrey,
  black,
  greenActiveButton,
  greyInactiveButton,
} from "./ui/colourLibrary";
import { Button } from "react-bootstrap";
import { LargeButton } from "./ui/LargeButton";

const locations: Location[] = [
  {
    displayName: "TANG",
    fullName: "TANG - The Asian Food Emporium",
    suburb: "Melbourne",
  },
  {
    displayName: "Minh Phat",
    fullName: "Minh Phat Asian Grocer",
    suburb: "Richmond",
  },
  {
    displayName: "Aldi",
    fullName: "ALDI",
    suburb: "Richmond",
  },
];

export function ViewLocations(props: {
  onCreateClick: () => void;
}): ReactElement {
  const { onCreateClick } = props;
  const rows = locations.map((location) => {
    return (
      <div
        key={location.displayName}
        style={{
          display: "flex",
          backgroundColor: "#00c2ff",
          borderBottom: "2px",
          width: "100%",
          justifyContent: "space-between",
          height: "49px",
          alignItems: "center",
        }}
      >
        <Cell style={{ color: black }}>{location.displayName}</Cell>
        <Cell style={{ color: darkGrey }}>{location.suburb}</Cell>
      </div>
    );
  });
  return (
    <Wrapper>
      {rows}
      <LargeButton
        onClick={() => {
          onCreateClick();
        }}
        backgroundColor={greyInactiveButton}
      >
        Create
      </LargeButton>
    </Wrapper>
  );
}

const Cell = styled.div`
  font-size: 20px;
  border-width: 0px;
  border-style: solid;
  padding: 5px;
`;
