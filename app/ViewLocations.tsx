import { ReactElement } from "react";
import { Wrapper } from "./ui/Wrapper";
import { styled } from "styled-components";
import { Location } from "./types";

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

export function ViewLocations(): ReactElement {
  const rowSeed = locations.map((location, index) => {
    return (
      <div key={location.displayName} style={{ display: "flex" }}>
        <Cell style={{ color: "black" }}>{location.displayName}</Cell>
        <Cell style={{ color: "#535353" }}>{location.suburb}</Cell>
      </div>
    );
  });
  return <Wrapper>{rowSeed}</Wrapper>;
}

const Cell = styled.div`
  width: 48vw;
  height: 49px;
  font-size: 20px;
  border-width: 0px;
  border-bottom-width: 2px;
  border-style: solid;
  background-color: #00c2ff;
  padding: 5px;
`;
