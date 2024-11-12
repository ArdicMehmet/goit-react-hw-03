import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import { useEffect } from "react";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";
function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [filterItem, setFilterItem] = useState([]);
  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);
  useEffect(() => {
    setFilteredContacts(
      contacts.filter((contact) => contact.name.includes(filterItem))
    );
  }, [filterItem, contacts]);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const addContact = (values) => {
    !contacts.find(
      (contact) =>
        contact.name == values.name && contact.number == values.number
    )
      ? setContacts([...contacts, values])
      : "";
  };
  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id != id));
  };
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm handleClick={addContact} />
      <SearchBox handleChange={setFilterItem} />
      <ContactList contacts={filteredContacts} handleDelete={deleteContact} />
    </div>
  );
}

export default App;
