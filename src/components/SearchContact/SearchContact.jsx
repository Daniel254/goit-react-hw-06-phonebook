import { useDispatch, useSelector } from 'react-redux';
import { Input } from './SearchContact.styled';

import * as contactsActions from 'redux/cotactsSlice';
import sanitizeString from 'utils/sanitizeString';

function SearchContact() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const filterHandler = ({ target: { value } }) => {
    dispatch(contactsActions.setFilter({ filter: sanitizeString(value) }));
  };
  return (
    <div>
      Find contact by name
      <Input
        name="filter"
        type="text"
        autoComplete="off"
        onChange={filterHandler}
        value={filter}
      />
    </div>
  );
}

export default SearchContact;
