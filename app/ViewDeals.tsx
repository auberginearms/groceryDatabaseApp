import { ReactElement, useEffect, useState } from "react";
import { Wrapper } from "./ui/Wrapper";
import { styled } from "styled-components";
import { DealWithStore } from "./types";
import { darkGrey, black, skyBlue } from "./ui/colourLibrary";
import { getDeals } from "@/server/getDeals";

export function ViewDeals(): ReactElement {
  const [dealList, setDealList] = useState<DealWithStore[] | undefined>(
    undefined
  );
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDeals();
      setDealList(result);
    };
    fetchData();
  }, []);

  if (dealList === undefined) {
    return <Wrapper></Wrapper>;
  }

  const displayedDeals = dealList.map((deal) => {
    return (
      <div
        key={deal.item}
        style={{
          display: "flex",
          backgroundColor: skyBlue,
          borderBottom: "2px",
          borderColor: black,
          width: "100%",
          justifyContent: "space-between",
          height: "49px",
          alignItems: "center",
        }}
      >
        <div>
          <Cell style={{ color: black }}>{deal.item}</Cell>
          <div>
            <div style={{ display: "flex" }}>
              <Cell style={{ color: black }}>
                {`$${deal.pricePerUnit.toFixed(2)}/${deal.unitType}`}
              </Cell>
              <Cell style={{ color: darkGrey }}>
                {"· " + deal.dateObserved.toLocaleDateString()}
              </Cell>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Cell style={{ color: black }}>{deal.store.displayName}</Cell>
          <Cell style={{ color: darkGrey }}>{deal.store.suburb}</Cell>
        </div>
      </div>
    );
  });
  return <Wrapper>{displayedDeals}</Wrapper>;
}

const Cell = styled.div`
  font-size: 16px;
  border-width: 0px;
  border-style: solid;
  padding: 2px;
`;
