import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAXsIRuma61wBZP3Z1BH5nO2iqawtkiKH4';

// AIzaSyAXsIRuma61wBZP3Z1BH5nO2iqawtkiKH4

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
