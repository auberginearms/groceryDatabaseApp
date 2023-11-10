import { ReactElement, useState } from "react";
import { PageHeader } from "./ui/PageHeader";
import { Wrapper } from "./ui/Wrapper";
import { ViewStores } from "./ViewStores";
import { CreateStore } from "./CreateStores";
import { LargeButton } from "./ui/LargeButton";
import { Button } from "react-bootstrap";
import { greenActiveButton, greyInactiveButton } from "./ui/colourLibrary";

enum StoresPage {
  View,
  Create,
}

export function Stores(): ReactElement {
  const [storesPage, setStoresPage] = useState(StoresPage.View);

  return (
    <Wrapper>
      {storesPage === StoresPage.View && (
        <ViewStores
          onCreateClick={() => {
            setStoresPage(StoresPage.Create);
          }}
        />
      )}
      {storesPage === StoresPage.Create && (
        <CreateStore
          onCancelClick={() => {
            setStoresPage(StoresPage.View);
          }}
          onCreateStoreClick={() => {
            setStoresPage(StoresPage.View);
          }}
        />
      )}
    </Wrapper>
  );
}
