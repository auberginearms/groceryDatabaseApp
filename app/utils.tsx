import styled from "styled-components";
import { Credentials } from "./types";
import axios from "axios";
import { Form } from "react-bootstrap";

export enum PageDisplay {
  Login,
  Welcome,
}

export const TextStyling = styled.div`
  color: #fff;
  font-size: 20px;
`;

export const StyledFormGroup = styled(Form.Group)`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin-bottom: 20px;
`;

// export async function getSavedLoginDetails(): Promise<Credentials[]> {
//   const response = await axios.get(
//     "https://getpantry.cloud/apiv1/pantry/7945086f-83a7-4b3a-966b-eefdd7143cfb/basket/SavedLoginDetails"
//   );
//   const loginDetails = response.data.loginDetails;
//   return loginDetails;
// }

// export const loginDetails = getSavedLoginDetails();
