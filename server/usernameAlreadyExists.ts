"use server";

import prisma from "@/lib/prisma";

export async function usernameAlreadyExists(inputUsername: string) {
  return validLoginDetails.some((loginDetails) => {
    return loginDetails.username === inputUsername;
  });
}
