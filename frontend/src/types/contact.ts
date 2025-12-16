// src/types/contact.ts
export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}