import { Credentials } from "./types";
import axios from "axios";

export enum PageDisplay {
  Login,
  Welcome,
}

export async function getSavedLoginDetails(): Promise<Credentials[]> {
  const response = await axios.get(
    "https://getpantry.cloud/apiv1/pantry/7945086f-83a7-4b3a-966b-eefdd7143cfb/basket/SavedLoginDetails"
  );
  const loginDetails = response.data.loginDetails;
  console.log(loginDetails);
  return loginDetails;
}

export const loginDetails = getSavedLoginDetails();
