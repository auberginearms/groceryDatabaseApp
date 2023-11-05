import { ReactElement } from "react";
import { Wrapper } from "./ui/Wrapper";
import { Button } from "react-bootstrap";
import { greenActiveButton, greyInactiveButton } from "./ui/colourLibrary";


export function CreateLocations(props:{onCreateLocationClick:()=>void, onCancelClick:()=>void}): ReactElement {
  const {onCreateLocationClick,onCancelClick}=props
  return <Wrapper>Create Locations
    <div>
    <Button
    onClick={()=>{onCancelClick()}}
 style={{
  height: 32,
  width: 150,
  margin: 10,
  borderRadius: 12,
  fontSize: 12,
  backgroundColor: greyInactiveButton}}>
  Cancel
</Button>
<Button
onClick={()=>{onCreateLocationClick()
    console.log("dummy location creation")}}
 style={{
  height: 32,
  width: 150,
  margin: 10,
  borderRadius: 12,
  fontSize: 12,
  backgroundColor:greenActiveButton}}>
  Create
</Button>
</div>
  </Wrapper>
}

