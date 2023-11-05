import { ReactElement, useState } from "react";
import { PageHeader } from "./ui/PageHeader";
import { Wrapper } from "./ui/Wrapper";
import { ViewLocations } from "./ViewLocations";
import { CreateLocations } from "./CreateLocations";
import { LargeButton } from "./ui/LargeButton";
import { Button } from "react-bootstrap";
import { greenActiveButton, greyInactiveButton } from "./ui/colourLibrary";

enum LocationPage {
  View,
  Create
}

export function Locations(): ReactElement {
  const [locationPage, setLocationPage] = useState(LocationPage.View);

  return (
    <Wrapper>{locationPage === LocationPage.View && <ViewLocations />}
    {locationPage === LocationPage.Create && <CreateLocations/>}
    <div>
{locationPage===LocationPage.Create?<Button
 style={{
  height: 32,
  width: 150,
  margin: 10,
  borderRadius: 12,
  fontSize: 12,
backgroundColor:greyInactiveButton}}
      onClick={()=>{setLocationPage(LocationPage.View)}}>
  Cancel
</Button>:null      }
<Button 
                style={{
                  height: 32,
                  width: 150,
                  margin: 10,
                  borderRadius: 12,
                  fontSize: 12,
                  backgroundColor:
                    locationPage === LocationPage.Create ? greenActiveButton: greyInactiveButton,
                }}
      
      onClick={()=>{setLocationPage(LocationPage.Create)}}>
  Create
</Button>
</div>
</Wrapper>
  );
}
