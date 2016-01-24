import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Here you see input value...' };
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
        <br />Value of input: {this.state.term}
      </div>
    );
    // return <input onClick={event => console.log(event.target.value)} />
  }
}

export default SearchBar;
