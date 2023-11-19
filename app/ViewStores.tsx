import { ReactElement, useEffect, useState } from "react";
import { Wrapper } from "./ui/Wrapper";
import { styled } from "styled-components";
import { Store } from "./types";
import {
  darkGrey,
  black,
  greyInactiveButton,
  skyBlue,
} from "./ui/colourLibrary";
import { LargeButton } from "./ui/LargeButton";
import { getStores } from "@/server/getStores";
import { UpdateStore } from "./UpdateStore";

export function ViewStores(props: { onCreateClick: () => void }): ReactElement {
  const { onCreateClick } = props;
  const [stores, setStores] = useState<Store[]>([]);
  const [storeIsSelected, setStoreIsSelected] = useState(false);
  const [storeDetails, setPrefilledStoreDetails] = useState<Store>({
    id: "",
    displayName: "",
    fullName: "",
    suburb: "",
  });
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
        onClick={() => {
          setStoreIsSelected(true);
          setPrefilledStoreDetails(store);
        }}
        key={store.displayName}
        style={{
          display: "flex",
          backgroundColor: skyBlue,
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
  if (storeIsSelected) {
    return (
      <Wrapper>
        <UpdateStore
          onBackClick={() => {
            setStoreIsSelected(false);
          }}
          onUpdateStoreSuccess={() => {
            setStoreIsSelected(false);
            console.log("function to overwrite existing store data goes here");
          }}
          store={storeDetails}
        ></UpdateStore>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {displayedStores}
      <LargeButton onClick={onCreateClick} backgroundColor={greyInactiveButton}>
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
