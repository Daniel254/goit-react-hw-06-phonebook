import PropTypes from 'prop-types';
import { Input } from './SearchContact.styled';

function SearchContact({ filterHandler, filterString }) {
  return (
    <div>
      Find contact by name
      <Input
        name="filter"
        type="text"
        autoComplete="off"
        onChange={filterHandler}
        value={filterString}
      />
    </div>
  );
}

SearchContact.propTypes = { filterHandler: PropTypes.func.isRequired };

export default SearchContact;
