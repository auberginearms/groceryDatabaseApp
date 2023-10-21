import { ReactElement, useState } from "react";
import { Login } from "./Login";
import { styled } from "styled-components";
import { Welcome } from "./Welcome";

enum PageDisplay {
  Login,
  Welcome,
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
        />
      )}
      {displayPage === PageDisplay.Welcome && (
        <Welcome
          onLogout={() => {
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
