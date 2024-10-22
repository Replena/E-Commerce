import React from "react";
import Contact from "../components/ContactPage/Contact.jsx";
import ContactCta from "../components/ContactPage/ContactCta.jsx";
import ContactHeader from "../components/ContactPage/ContactHeader.jsx";
function ContactContent() {
  return (
    <div>
      <ContactHeader />
      <Contact />
      <ContactCta />
    </div>
  );
}

export default ContactContent;
