import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ keyword, keywordChange }) => {
  return (
      <div className='search-bar'>
          <input 
              type='text' 
              className='search-bar'
              value={keyword}
              onChange={(event) => keywordChange(event.target.value)}
              placeholder='Cari berdasarkan Judul Catatan'
          />
      </div>
  )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar;