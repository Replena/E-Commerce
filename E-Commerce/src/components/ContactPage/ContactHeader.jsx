import React from "react";
import data from "../../data/data.json";

function ContactHeader() {
  const contactData = data.contact.contactHeader;
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-10 lg:px-16 container">
      <div className="text-center lg:text-left lg:w-1/2">
        <p className="text-sm uppercase  text-text-default font-bold">
          {contactData.sectionTitle}
        </p>
        <h1 className="text-4xl font-bold mt-2 text-text-default">
          {contactData.title}
        </h1>

        <p className="mt-4 text-text-secondary">{contactData.subtitle}</p>
        <div className="mt-6">
          <p className="font-semibold text-lg">
            {contactData.contactInfo.phoneLabel}:{" "}
            <span className="text-text-default">
              {contactData.contactInfo.phone}
            </span>
          </p>
          <p className="font-semibold text-lg">
            {contactData.contactInfo.faxLabel}:{" "}
            <span className="text-text-default">
              {contactData.contactInfo.fax}
            </span>
          </p>
        </div>
        <div className="flex space-x-4 mt-6 justify-center lg:justify-start">
          {contactData.socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.link}
              className="text-text-default hover:text-text-secondary transition-colors duration-300"
            >
              <i className={`fab fa-${social.icon} text-2xl`}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:w-1/2">
        <img
          src={contactData.image}
          alt="Contact Us"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default ContactHeader;
