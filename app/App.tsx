import { ReactElement, useState } from "react";
import { Login } from "./Login";
import { styled } from "styled-components";
import { Welcome } from "./Welcome";
import { PageDisplay } from "./utils";
import { AccountCreation } from "./AccountCreation";
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
        <Welcome
          onLogout={() => {
            setdisplayPage(PageDisplay.Login);
          }}
        />
      )}
      {displayPage === PageDisplay.AccountCreation && (
        <AccountCreation
          backToLogin={() => {
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
  height: 100%;
  justify-content: centre;
`;
