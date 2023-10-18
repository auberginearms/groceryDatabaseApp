"use server";

import { Credentials } from "@/app/types";

export async function credentialsAreValid(
  inputUsername: string,
  inputPassword: string
) {
  const validLoginDetails: Credentials[] = [
    {
      username: "FakeUser1",
      password: "Password1",
    },
    {
      username: "FakeUser2",
      password: "Password2",
    },
  ];
  const elementWithMatchingUsername = validLoginDetails.find((loginDetails) => {
    return loginDetails.username === inputUsername;
  });
  if (!elementWithMatchingUsername) {
    return;
  }
  return elementWithMatchingUsername.password === inputPassword;
}
