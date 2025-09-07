/* eslint-disable @typescript-eslint/no-explicit-any */
// src/services/propertyService.ts
export interface Property {
  description: string;
  type: any;
  id: string;
  name: string;
  buildingNumber: string;
  cardinalDirection: string;
  city: string;
  country: string;
  countryCode: string;
  state: string;
  timeZone: string;
  image: string;
  ownerName: string;
  contactNumber: string;
  createdAt: string;
}

export const fetchProperties = async (): Promise<Property[]> => {
  try {
    const res = await fetch(
      "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing"
    );
    if (!res.ok) throw new Error("Failed to fetch properties");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
