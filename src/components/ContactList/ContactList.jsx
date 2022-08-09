import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Notification from 'components/Notification';
import { DeleteBtn, List } from './ContactList.styled';

import { LS_CONTACT_LIST } from 'constants/lsConstants';
import * as contactsActions from 'redux/cotactsSlice';
import sanitizeString from 'utils/sanitizeString';

function ContactList() {
  const dispatch = useDispatch();
  const contactList = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const filteredContactList = contactList.filter(item =>
    sanitizeString(item.name).includes(filter)
  );

  const deleteContactHandler = id => {
    dispatch(contactsActions.remove({ id }));
  };

  useEffect(() => {
    const contactList = JSON.parse(localStorage.getItem(LS_CONTACT_LIST));
    if (contactList?.length) {
      dispatch(contactsActions.add({ contacts: contactList }));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(LS_CONTACT_LIST, JSON.stringify(contactList));
  }, [contactList]);

  return (
    <>
      {filteredContactList.length > 0 ? (
        <List>
          {filteredContactList.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <DeleteBtn onClick={() => deleteContactHandler(id)}>
                Delete
              </DeleteBtn>
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
};

export default ContactList;
