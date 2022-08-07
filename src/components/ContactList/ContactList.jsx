import PropTypes from 'prop-types';

import Notification from 'components/Notification';
import { DeleteBtn, List } from './ContactList.styled';

import sanitizeString from 'utils/sanitizeString';

function ContactList({ contactList, query, deleteContact }) {
  const filteredContactList = contactList.filter(item =>
    sanitizeString(item.name).includes(query)
  );

  return (
    <>
      {filteredContactList.length > 0 ? (
        <List>
          {filteredContactList.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <DeleteBtn onClick={() => deleteContact(id)}>Delete</DeleteBtn>
            </li>
          ))}
        </List>
      ) : contactList.length === 0 ? (
        <Notification message="Contact list is empty" />
      ) : (
        <Notification message="No contacts found" />
      )}
    </>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
