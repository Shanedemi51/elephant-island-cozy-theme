import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | Elephant Island",
  description: "Terms of Use for Elephant Island.",
};

const sections = [
  {
    title: "Acceptance Of Terms",
    body: [
      "By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use the website.",
      "These terms may be updated from time to time. Continued use of the site after changes are posted means you accept the revised terms.",
    ],
  },
  {
    title: "Website Content",
    body: [
      "All content on this website, including text, images, branding, layout, and tour information, is provided for general information purposes and may be updated without notice.",
      "We aim to keep all information accurate and current, but we do not guarantee that every description, price, itinerary, or availability detail will always be complete, current, or error free.",
    ],
  },
  {
    title: "Bookings And Enquiries",
    body: [
      "Submitting an enquiry through this website does not create a confirmed booking. Travel arrangements are only confirmed after direct communication with Elephant Island and any required payment or written confirmation has been completed.",
      "Specific booking terms, cancellation rules, payment conditions, and supplier requirements may apply to any package or travel service you purchase from us.",
    ],
  },
  {
    title: "Acceptable Use",
    body: [
      "You agree not to misuse this website, attempt unauthorized access, interfere with site operations, submit false information, or use the site for unlawful activity.",
      "We reserve the right to restrict access or take appropriate action if website use is abusive, harmful, fraudulent, or in violation of applicable law.",
    ],
  },
  {
    title: "Third Party Links",
    body: [
      "This website may include links to third-party websites or services for your convenience. We are not responsible for the content, privacy practices, availability, or accuracy of those external sites.",
      "Using third-party links is at your own discretion and subject to the terms and policies of those third parties.",
    ],
  },
  {
    title: "Liability",
    body: [
      "To the fullest extent permitted by law, Elephant Island is not liable for any direct, indirect, incidental, or consequential loss arising from your use of this website or reliance on the information provided here.",
      "Nothing in these terms excludes liability that cannot be excluded under applicable law.",
    ],
  },
  {
    title: "Contact",
    body: [
      "If you have any questions about these Terms of Use, please contact Elephant Island at info@elephant-island.com or through the contact options provided on this website.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Use"
      intro="These Terms of Use govern your access to and use of the Elephant Island website, including travel enquiries, website content, and related services."
      lastUpdated="April 22, 2026"
      sections={sections}
    />
  );
}
