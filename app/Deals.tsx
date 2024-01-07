import { ReactElement, useState } from "react";
import { Wrapper } from "./ui/Wrapper";
import { ViewDeals } from "./ViewDeals";

enum DealsPage {
  View,
}

export function Deals(): ReactElement {
  const [dealsPage, setDealsPage] = useState(DealsPage.View);

  return <Wrapper>{dealsPage === DealsPage.View && <ViewDeals />}</Wrapper>;
}
