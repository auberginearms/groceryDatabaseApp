import { ReactElement, useState } from "react";
import { Login } from "./Login";
import { styled } from "styled-components";
import { TabNavigation } from "./TabNavigation";
import { AccountCreation } from "./AccountCreation";

enum PageDisplay {
  Login,
  Welcome,
  AccountCreation,
}

function App(): ReactElement {
  const [displayPage, setdisplayPage] = useState(PageDisplay.Login);
  return (
    <AppStyling>
      {displayPage === PageDisplay.Login && (
        <Login
          onLoginSuccess={() => {
            setdisplayPage(PageDisplay.Welcome);
          }}
          onAccountCreationClick={() => {
            setdisplayPage(PageDisplay.AccountCreation);
          }}
        />
      )}
      {displayPage === PageDisplay.Welcome && (
        <TabNavigation
          onLogout={() => {
            setdisplayPage(PageDisplay.Login);
          }}
        />
      )}
      {displayPage === PageDisplay.AccountCreation && (
        <AccountCreation
          onGoBackClick={() => {
            setdisplayPage(PageDisplay.Login);
          }}
          onSubmitSuccess={() => {
            setdisplayPage(PageDisplay.Login);
          }}
        />
      )}
    </AppStyling>
  );
}

export default App;

const AppStyling = styled.div`
  display: flex;
  flex: 1;
`;
