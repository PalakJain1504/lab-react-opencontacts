import React, { useState } from "react";
import contactsData from "./contacts.json";
import "./App.css";

function App() {
  // the first 5 contacts
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  //  addong  a random contact from the remaining contacts
  const addRandomContact = () => {
    const remainingContacts = contactsData.filter(
      (contact) => !contacts.includes(contact)
    );
    if (remainingContacts.length === 0) return;
    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    setContacts([...contacts, randomContact]);
  };

  // sort contacts by name
  const sortByName = () => {
    const sortedByName = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedByName);
  };

  //sort contacts by popularity
  const sortByPopularity = () => {
    const sortedByPopularity = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedByPopularity);
  };

  // delete a contact
  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>OpenContacts</h1>

      {/* Buttons */}
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>

      {/* Contacts Table */}
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🏆" : ""}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
