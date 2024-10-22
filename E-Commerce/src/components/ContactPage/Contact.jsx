import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Button } from "../ui/button.jsx";
import data from "../../data/data.json";

const iconMap = {
  phone: <PhoneIcon className="h-12 w-12 text-primary" />,
  mapPin: <MapPinIcon className="h-12 w-12 text-primary" />,
  telegram: <EnvelopeIcon className="h-12 w-12 text-primary" />,
};

function Contact() {
  const contactData = data.contact.contactPage;

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 lg:px-24">
      <p className="mt-4 text-text-default font-bold uppercase">
        {contactData.headerSubtitle}
      </p>
      <h1 className="text-2xl lg:text-4xl font-bold text-center mb-8">
        {contactData.headerTitle}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-screen-lg">
        {contactData.contacts.map((contact, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-8 ${
              index === 1
                ? "bg-text-default text-text-light"
                : "bg-text-light text-text-default"
            }`}
          >
            {iconMap[contact.icon]}
            <p className="mt-4 text-center">
              {contact.email1} <br /> {contact.email2}
            </p>
            <p className="mt-2 text-center font-semibold">{contact.label}</p>
            <Button variant="outline" className="mt-4">
              {contact.buttonLabel}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
