"use server";

import prisma from "@/lib/prisma";

export async function getDeals() {
  const result = await prisma.deal.findMany({
    include: { store: true },
  });

  return result;
}
