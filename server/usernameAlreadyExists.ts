"use server";

import { validLoginDetails } from "./getCredentials";

export async function usernameAlreadyExists(inputUsername: string) {
  return validLoginDetails.some((loginDetails) => {
    return loginDetails.username === inputUsername;
  });
}
