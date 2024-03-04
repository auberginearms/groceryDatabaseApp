import { ReactElement } from "react";
import { Form } from "react-bootstrap";

export function FormCheckRadio(props: {
  onChange: (newUnit: string) => void;
  unit: string;
  value: string;
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
