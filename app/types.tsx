export type Store = {
  id: string;
  displayName: string;
  fullName: string;
  suburb: string;
};

export type Size = "large" | "small";

export type DealAndStore = Deal & { store: Store };

export type Deal = {
  id: string;
  item: string;
  pricePerUnit: number;
  unitType: string;
  dateObserved: Date;
  storeID: string;
};
