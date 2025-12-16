import { apiRequest } from "./api";
import type { ContactPayload, ContactResponse } from "../types/contact";

export const submitContactForm = (payload: ContactPayload) => {
  return apiRequest<ContactResponse>("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
