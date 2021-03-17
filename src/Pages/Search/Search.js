import React from 'react';
import CharacterBox from './CharacterBox/CharacterBox';
import Category from './Category/Category';
import SearchBox from './SearchBox/SearchBox';
import './search.scss';

class Search extends React.Component {
  render() {
    return (
      <main className="search">
        <SearchBox />
        <CharacterBox />
        <Category />
      </main>
    );
  }
}

export default Search;
