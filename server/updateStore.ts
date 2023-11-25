"use server";

import prisma from "@/lib/prisma";
import { Store } from "@prisma/client";

export async function updateStore(
  store: Store,
  newDisplayName: string,
  newFullName: string,
  newSuburb: string
) {
  await prisma.store.update({
    where: {
      displayName: store.displayName,
      suburb: store.suburb,
    },
    data: {
      displayName: newDisplayName,
      fullName: newFullName,
      suburb: newSuburb,
    },
  });
}
