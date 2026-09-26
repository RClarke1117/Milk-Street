export type Store = {
  id: string;
  name: string;
  line1: string;
  city: string;
  region: string;
  postal: string;
  lat: number;
  lng: number;
  phone?: string;
  note?: string;
  house?: boolean;
};

export const houseStore: Store = {
  id: "milk-street",
  name: "Milk Street Distillery",
  line1: "1 Milk Street, Building 1",
  city: "Branchville",
  region: "NJ",
  postal: "07826",
  lat: 41.1465,
  lng: -74.7493,
  phone: "(973) 948-0178",
  note: "Bottle and gift-card pickup only, Monday through Friday, 12–6. Please email to verify that we are in.",
  house: true,
};

export const stores: Store[] = [];

export function storeMaps(store: Store) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${store.line1}, ${store.city}, ${store.region} ${store.postal}`,
  )}`;
}

export function milesBetween(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const sinLat = Math.sin(dLat / 2);
  const sinLng = Math.sin(dLng / 2);
  const h = sinLat * sinLat + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * sinLng * sinLng;
  return 2 * 3958.8 * Math.asin(Math.min(1, Math.sqrt(h)));
}

export function formatMiles(miles: number) {
  if (miles < 1) return `${Math.max(0.1, Math.round(miles * 10) / 10)} mi`;
  return `${Math.round(miles)} mi`;
}
