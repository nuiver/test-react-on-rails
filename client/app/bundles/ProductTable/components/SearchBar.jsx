import React, { PropTypes } from 'react';

class SearchBar extends React.Component {



  render() {

    const { filterText, inStockOnly, updateSearch } = this.props

    return (
      <div>
        <form>
          <label>Search for: </label>
          <input
            type='text' value={ filterText } id='filterText'
            onChange={(e) => updateSearch(e.target.value)}
          ></input>
        </form>
      </div>
    )
  }
}

export default SearchBar
