"use server";

import prisma from "@/lib/prisma";

export async function credentialsAreValid(
  inputUsername: string,
  inputPassword: string
) {
  const passwordOfExistingUsername = await prisma.user.findFirst({
    where: { username: inputUsername },
    select: { password: true },
  });
  if (passwordOfExistingUsername !== null) {
    return passwordOfExistingUsername.password === inputPassword;
  } else {
    return false;
  }
}
