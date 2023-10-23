"use server";

import { validLoginDetails } from "./getCredentials";

export async function credentialsAreValid(
  inputUsername: string,
  inputPassword: string
) {
  return validLoginDetails.some((loginDetails, index) => {
    return (
      loginDetails.username === inputUsername &&
      validLoginDetails[index].password === inputPassword
    );
  });
}
