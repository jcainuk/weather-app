import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ searchText, setSearchText }) => {
  const handleInputChange = (event) => console.log(event.target.value);
  return (
    <div className="search-form">
      <input type="text" onChange={handleInputChange} />
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};
