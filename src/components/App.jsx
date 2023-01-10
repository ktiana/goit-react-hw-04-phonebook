import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contactList')) ?? []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contactInList = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactInList) {
      alert(`⚠ Oops... Contact ${name} already in list!`);
      return;
    }
    const newContact = { name, number, id: nanoid() };

    setContacts([...contacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(newContact => newContact.id !== id));
  };

  const getFilterContact = () => {
    console.log(filter);
    return contacts.filter(newContact =>
      newContact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleChange = event => {
    const { value } = event.target;
    setFilter(value);
  };

  return (
    <div>
      <h1>Phonebook </h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts </h2>
      <ContactFilter filter={filter} handleChange={handleChange} />
      <ContactList
        contacts={getFilterContact()}
        deleteContact={deleteContact}
      />
    </div>
  );
};
