import { useDispatch, useSelector } from 'react-redux';
import { Input } from './SearchContact.styled';

import { getContactsFilter, setContactFilter } from 'redux/cotacts';
import sanitizeString from 'utils/sanitizeString';

function SearchContact() {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);
  const filterHandler = ({ target: { value } }) => {
    dispatch(setContactFilter({ filter: sanitizeString(value) }));
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
