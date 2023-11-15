import { ReactElement, useState } from "react";
import { PageHeader } from "./ui/PageHeader";
import { Wrapper } from "./ui/Wrapper";
import { ViewStores } from "./ViewStores";
import { CreateStore } from "./CreateStores";
import { UpdateStores } from "./UpdateStores";

enum StoresPage {
  View,
  Create,
  Update,
}

export function Stores(): ReactElement {
  const [storesPage, setStoresPage] = useState(StoresPage.View);

  return (
    <Wrapper>
      {storesPage === StoresPage.View && (
        <ViewStores
          onStoreClick={() => {
            setStoresPage(StoresPage.Update);
          }}
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
      {storesPage === StoresPage.Update && (
        <UpdateStores
          onBackClick={() => {
            setStoresPage(StoresPage.View);
          }}
          onUpdateStoreSuccess={() => {
            setStoresPage(StoresPage.View);
          }}
        />
      )}
    </Wrapper>
  );
}
