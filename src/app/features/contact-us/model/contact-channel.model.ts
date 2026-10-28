/** One direct contact channel returned by the contact endpoint. */
export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  iconSrc: string;
}

/** Office coordinates returned with the contact payload. */
export interface ContactCoordinates {
  latitude: number;
  longitude: number;
}
