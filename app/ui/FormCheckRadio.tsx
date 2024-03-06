import { ReactElement } from "react";
import { Form } from "react-bootstrap";
import { Unit } from "../types";

export function FormCheckRadio(props: {
  onChange: (newUnit: Unit) => void;
  unit: Unit;
  value: Unit|undefined;
}): ReactElement {
  const { unit, value, onChange } = props;
  return (
    <Form.Check
      type="radio"
      label={unit}
      checked={value === unit}
      onClick={() => {
        onChange(unit);
      }}
    />
  );
}
