"use server";

import prisma from "@/lib/prisma";

export async function credentialsAreValid(
  inputUsername: string,
  inputPassword: string
) {
  const result = await prisma.user.findMany();
  const existingCredentials = result.map((users) => {
    return { username: users.username, password: users.password };
  });
  return existingCredentials.some((loginDetails, index) => {
    return (
      loginDetails.username === inputUsername &&
      existingCredentials[index].password === inputPassword
    );
  });
}
