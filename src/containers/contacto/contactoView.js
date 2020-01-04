import React from "react";
import Contactocontainer from "./contactoContainer";
import ContactoProvider from "./contactoProvider";

const ContactoView = () => (
  <ContactoProvider>
    <Contactocontainer />
  </ContactoProvider>
);

export default ContactoView;
