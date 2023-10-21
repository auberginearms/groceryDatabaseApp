import styled from "styled-components";
import { Credentials } from "./types";
import axios from "axios";
import { Form } from "react-bootstrap";


export const PageHeaderStyling = styled.div`
  color: #fff;
  font-size: 20px;
`;

export const StyledFormGroup = styled(Form.Group)`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin-bottom: 20px;
`;

