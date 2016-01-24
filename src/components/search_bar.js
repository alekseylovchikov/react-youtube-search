import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
    // return <input onClick={event => console.log(event.target.value)} />
  }
}

export default SearchBar;
