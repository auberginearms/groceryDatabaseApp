"use server";

import { Credentials } from "@/app/types";

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

export async function userNameAlreadyExists(inputUsername: string) {
  return validLoginDetails.some((loginDetails) => {
    return loginDetails.username === inputUsername;
  });
}
