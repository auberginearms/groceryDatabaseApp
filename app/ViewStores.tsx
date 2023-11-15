import { ReactElement, useEffect, useState } from "react";
import { Wrapper } from "./ui/Wrapper";
import { styled } from "styled-components";
import { Location } from "./types";
import { darkGrey, black, greyInactiveButton } from "./ui/colourLibrary";
import { LargeButton } from "./ui/LargeButton";
import { getStores } from "@/server/getStores";

export function ViewStores(props: { onCreateClick: () => void }): ReactElement {
  const { onCreateClick } = props;
  const [stores, setStores] = useState<Location[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getStores();
      setStores(result);
    };
    fetchData();
  }, []);

  const displayedStores = stores.map((store) => {
    return (
      <div
        key={store.displayName}
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
        <Cell style={{ color: black }}>{store.displayName}</Cell>
        <Cell style={{ color: darkGrey }}>{store.suburb}</Cell>
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
