import { ReactElement, useEffect, useState } from "react";
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
import { getStores } from "@/server/getStores";

export function ViewLocations(props: {
  onCreateClick: () => void;
}): ReactElement {
  const { onCreateClick } = props;
  const [locations, setLocations] = useState<Location[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getStores();
      setLocations(result);
    };
    fetchData();
  }, []);

  const displayedStores = locations.map((location) => {
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
      {displayedStores}
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
