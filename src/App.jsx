import Box from 'components/Box';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Container from 'components/Container';
import SearchContact from 'components/SearchContact';
import Section from 'components/Section';

import GlobalStyle from 'styles/GlobalStyle';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Box as="h1" mx="auto">
          Phonebook
        </Box>
        <ContactForm />
        <Section mt="10px">
          <Box as="h2">Contacts</Box>
          <SearchContact />
          <ContactList />
        </Section>
      </Container>
    </>
  );
}
