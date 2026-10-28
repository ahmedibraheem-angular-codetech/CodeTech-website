/** One service option for the contact form dropdown. */
export interface ContactServiceOption {
  id: string;
  label: string;
}

/** Payload the contact form sends to the request endpoint. */
export interface ContactRequest {
  fullName: string;
  organizationName: string;
  phone: string;
  email: string;
  serviceIds: string[];
  brief: string;
}
