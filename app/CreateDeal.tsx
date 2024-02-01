import { ReactElement, useState } from "react";
import { Wrapper } from "./ui/Wrapper";
import { greenActiveButton, greyInactiveButton } from "./ui/colourLibrary";
import { LargeButton } from "./ui/LargeButton";
import { StyledForm } from "./ui/StyledForm";
import { PageHeader } from "./ui/PageHeader";
import { FormLabel } from "./ui/FormLabel";
import { FormGroup } from "./ui/FormGroup";
import { FormControlString } from "./ui/FormControlString";
import { Form, FormCheck, InputGroup } from "react-bootstrap";
import { FormControlNumber } from "./ui/FormControlNumber";

export function CreateDeal(props: {
  onCreateDealClick: () => void;
  onCancelClick: () => void;
}): ReactElement {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const [pricePerUnit, setPricePerUnit] = useState<string>("0");
  const [date, setDate] = useState(new Date());
  const [awaitingCreateDealCheck, setAwaitingCreateDealCheck] = useState(false);
  const { onCreateDealClick, onCancelClick } = props;
  return (
    <Wrapper>
      <PageHeader> Create Deal</PageHeader>
      <div style={{ display: "flex" }}>
        <StyledForm>
          <FormGroup>
            <FormLabel>Item</FormLabel>
            <FormControlString
              type="text"
              placeholder="enter item name"
              value={itemName}
              onChange={setItemName}
            />
          </FormGroup>
          <div
            id="priceAndUnit"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <FormGroup>
              <FormLabel>Price per unit</FormLabel>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <InputGroup.Text>$</InputGroup.Text>
                <FormControlNumber
                  type="text"
                  placeholder="enter price"
                  value={pricePerUnit}
                  onChange={setPricePerUnit}
                  width={60}
                />
              </div>
            </FormGroup>
          </div>
        </StyledForm>
      </div>
      {errorMessage}

      <div style={{ display: "flex" }}>
        <LargeButton
          onClick={() => {
            onCancelClick();
          }}
          backgroundColor={greyInactiveButton}
          isDisabled={awaitingCreateDealCheck}
        >
          Cancel
        </LargeButton>
        <LargeButton
          isLoading={awaitingCreateDealCheck}
          onClick={async () => {
            if (itemName === "") {
              return setErrorMessage("Item name cannot be empty");
            }
            if (pricePerUnit === "0") {
              return setErrorMessage("Price cannot be $0");
            }

            console.log(
              "item:" + itemName,
              typeof itemName,
              "price per unit:" + pricePerUnit,
              typeof pricePerUnit
            );
          }}
          backgroundColor={greenActiveButton}
        >
          Create
        </LargeButton>
      </div>
    </Wrapper>
  );
}
