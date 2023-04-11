import React from "react";
import { useState } from "react";

function ContactList({ contacts, deleteContact, edit }) {
  const [editingId, setEditingid] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPhone, setEditedPhone] = useState("");

  const handleEditClick = (id, name, email, phone) => {
    setEditingid(id);
    setEditedName(name);
    setEditedEmail(email);
    setEditedPhone(phone);
  };

  const handleSaveClick = () => {
    edit(editingId, editedName, editedEmail, editedPhone);
    setEditingid(null);
    setEditedName("");
    setEditedEmail("");
    setEditedPhone("");
  };

  const handleCancelClick = () => {
    setEditingid(null);
    setEditedName("");
    setEditedEmail("");
    setEditedPhone("");
  };
  return (
    <div>
      <h2>Contact Details</h2>
      <ul>
        {contacts.map((contacts, index) => (
          <div className="box">
          <li key={index}>
            {editingId === index ? (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={editedPhone}
                  onChange={(e) => setEditedPhone(e.target.value)}
                />
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </>
            ) : (
              <>
                <p>Name: {contacts.name}</p>
                <p>Email: {contacts.email}</p>
                <p>Phone: {contacts.phone}</p>

                <p>{"------------------------"}</p>
                <button onClick={() => deleteContact(index)}>Delete</button>
                
                <button
                  onClick={() =>
                    handleEditClick(
                      index,
                      contacts.name,
                      contacts.email,
                      contacts.phone
                    )
                  }
                >
                  Edit
                </button>
              </>
            )}
          </li></div>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
