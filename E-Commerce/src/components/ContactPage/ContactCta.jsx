import React from "react";
import data from "../../data/data.json";
import { Button } from "../ui/button";
function ContactCta() {
  const cta = data.contact.contactCta;
  return (
    <div className="container pb-24">
      <div className="text-center text-text-default">
        <img src={cta.arrow} alt={cta.title} className="mx-auto" />
        <h2 className="text-lg font-bold mt-8">{cta.title}</h2>
        <p className="mt-4 text-6xl font-bold">{cta.description}</p>
        <div className="mt-8">
          <Button href={cta.ctaLink} variant="default" size="lg">
            {cta.ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactCta;
