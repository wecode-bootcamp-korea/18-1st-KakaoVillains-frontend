import React from 'react';
import CharacterBox from './CharacterBox/CharacterBox';
import CategoryBox from './CategoryBox/CategoryBox';
import SearchBox from './SearchBox/SearchBox';
import './search.scss';

class Search extends React.Component {
  render() {
    return (
      <main className="search">
        <SearchBox />
        <CharacterBox />
        <CategoryBox />
      </main>
    );
  }
}

export default Search;
