import { ReactElement, useState } from "react";
import { Login } from "./Login";
import { styled } from "styled-components";
import { Welcome } from "./Welcome";
import { PageDisplay } from "./utils";
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
  flex-direction: column;
  justify-content: center;
  margin: auto;
  background: #090043;
  width: auto;
  height: 2000px;
`;
