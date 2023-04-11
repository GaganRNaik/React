import React, { useState } from "react";
import "./App.css";
import ContactList from "./Contact";
import ContactForm from "./Form";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (name, email, phone) => {
    const newContact = {
      name: name,
      email: email,
      phone: phone,
    };
    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const handleEditContact=(id,name,email,phone)=> {
   setContacts((contacts) =>
    contacts.map((contact,index) =>
      index === id ? { ...contact, name, email, phone } : contact
    )
  );
}
  return (
    <>
      <div className="head"></div>
      <div className="App">
        <div className="left-side">
          <ContactList
            contacts={contacts}
            deleteContact={handleDeleteContact}
            edit={handleEditContact}
          />
        </div>
        <div className="right-side">
          <ContactForm addContact={addContact} />
        </div>
      </div>
    </>
  );
}

export default App;
