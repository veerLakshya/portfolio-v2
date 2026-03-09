import type { Metadata } from "next";
import { ContactMePage } from "@/components/contact/ContactMePage";

export const metadata: Metadata = {
  title: "Contact | Lakshya Veer Singh ",
  description: "Get in touch with Lakshya Veer Singh for projects and collaborations.",
};

export default function ContactMeRoute() {
  return <ContactMePage />;
}
