import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Elephant Island",
  description: "Privacy Policy for Elephant Island.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "We may collect the information you choose to share with us when you contact us, request a quote, subscribe to updates, or make a travel enquiry. This can include your name, email address, phone number, travel preferences, and any details relevant to planning your trip.",
      "We may also collect basic technical information such as browser type, device information, pages visited, and approximate location data to help us improve our website and user experience.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use your information to respond to enquiries, prepare travel proposals, provide customer support, manage bookings, and improve our services.",
      "If you have opted in, we may also use your contact details to send marketing or newsletter updates. You can unsubscribe from these communications at any time.",
    ],
  },
  {
    title: "Sharing Your Information",
    body: [
      "We do not sell your personal information. We may share relevant details with trusted travel partners, accommodation providers, transport providers, guides, or service providers only when needed to plan or deliver your requested services.",
      "We may also disclose information where required by law, regulation, legal process, or to protect our rights and customers.",
    ],
  },
  {
    title: "Cookies And Analytics",
    body: [
      "Our website may use cookies or similar technologies to understand site usage, remember preferences, and improve performance. These tools help us understand how visitors interact with the site so we can keep refining the experience.",
      "You can usually control cookies through your browser settings, though disabling some cookies may affect how parts of the website function.",
    ],
  },
  {
    title: "Data Security And Retention",
    body: [
      "We take reasonable steps to protect personal information from unauthorized access, misuse, or disclosure. However, no online system can be guaranteed to be completely secure.",
      "We retain personal information only for as long as needed to provide our services, comply with legal obligations, resolve disputes, and maintain appropriate business records.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You may contact us to request access to, correction of, or deletion of the personal information you have shared with us, subject to any legal or operational requirements that apply.",
      "For privacy-related requests, please contact us at info@elephant-island.com.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This Privacy Policy explains how Elephant Island collects, uses, and protects information shared through our website and travel enquiry process."
      lastUpdated="April 22, 2026"
      sections={sections}
    />
  );
}
