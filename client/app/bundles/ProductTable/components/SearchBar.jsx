import React, { PropTypes } from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {

  render() {

    const { filterText, inStockOnly, updateSearch } = this.props

    return (
      <div className='searchform'>
        <form>
          <label>Search for: </label>
          <input className='inputfield'
            type='text' value={ filterText } id='filterText'
            onChange={(e) => updateSearch(e.target.value)}
          ></input>
        </form>
      </div>
    )
  }
}

export default SearchBar
