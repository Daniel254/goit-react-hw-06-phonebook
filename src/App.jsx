import { useEffect, useState } from 'react';

import Box from 'components/Box';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Container from 'components/Container';
import SearchContact from 'components/SearchContact';
import Section from 'components/Section';

import GlobalStyle from 'styles/GlobalStyle';
import sanitizeString from 'utils/sanitizeString';

import { LS_CONTACT_LIST } from 'constants/lsConstants';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactList = JSON.parse(localStorage.getItem(LS_CONTACT_LIST));
    if (contactList?.length) {
      setContacts(contactList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_CONTACT_LIST, JSON.stringify(contacts));
  }, [contacts]);

  const checkExistingContactName = newContact =>
    contacts.filter(
      contact =>
        sanitizeString(contact.name) === sanitizeString(newContact.name)
    ).length > 0;

  const filterHandler = ({ target: { value } }) => {
    setFilter(sanitizeString(value));
  };

  const addContactHandler = newContact => {
    if (checkExistingContactName(newContact)) {
      throw new Error(`${newContact.name} is already in contacts`);
    }
    setContacts([newContact, ...contacts]);
  };

  const deleteContactHandler = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <Box as="h1" mx="auto">
          Phonebook
        </Box>
        <ContactForm addContact={addContactHandler} />
        <Section mt="10px">
          <Box as="h2">Contacts</Box>
          <SearchContact filterHandler={filterHandler} filterString={filter} />
          <ContactList
            contactList={contacts}
            query={filter}
            deleteContact={deleteContactHandler}
          />
        </Section>
      </Container>
    </>
  );
}
