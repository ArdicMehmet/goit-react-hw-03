import React from "react";
import Contact from "../Contact";
import styles from "./contactList.module.css";
const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div className={styles.container}>
      {contacts.map((contact, index) => (
        <Contact
          key={index}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ContactList;
