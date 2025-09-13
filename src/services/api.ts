export type Property = {
  id: string;
  name: string;
  city: string;
  country: string;
  image: string;
  ownerName: string;
  contactNumber: string;
  createdAt: string;
  type: "sale" | "rent";
};

const BASE_URL =
  "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing";

export async function fetchProperties(): Promise<Property[]> {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch properties");
  }
  const data = await res.json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.map((item: any) => ({
    ...item,
    type: Math.random() > 0.5 ? "sale" : "rent",
  }));
}
