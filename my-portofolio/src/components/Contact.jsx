import React from "react";
import SectionHeader from "./sections/SectionHeader";
import ContactInfo from "./sections/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <SectionHeader title={"Contact Me"} />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <ContactInfo
                icon="envelope"
                title="Email"
                value="firdauz.workspace@gmail.com"
              />
              <ContactInfo
                icon="phone"
                title="Phone"
                value="+62 878 1491-4430"
              />
              <ContactInfo
                icon="map-marker-alt"
                title="Location"
                value="Central Java, Indonesia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
