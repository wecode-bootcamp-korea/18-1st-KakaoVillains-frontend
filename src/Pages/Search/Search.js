import React from 'react';
import CharacterBox from './CharacterBox/CharacterBox';
import CategoryBox from './CategoryBox/CategoryBox';
import SearchBox from './SearchBox/SearchBox';
import SearchDataList from './SearchDataList/SearchDataList';
import './search.scss';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      keyWord: '',
      keyWordList: [],
      toggleOff: false,
    };
  }

  keyWordInput = e => {
    this.setState({
      keyWord: e.target.value,
    });
  };

  keyWordDelete = () => {
    this.setState({
      keyWord: '',
    });
  };

  filterKeyword = () => {
    fetch(`/data/searchData.json?filter${this.state.keyword}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          keyWordList: res,
        })
      );
  };

  goToBack = () => {
    this.setState({
      toggleOff: true,
    });
  };

  render() {
    const { keyWord, keyWordList, toggleOff } = this.state;
    const { keyWordDelete, keyWordInput, goToBack } = this;
    return (
      <main className={toggleOff ? 'searchOff' : 'search'}>
        <SearchBox
          keyWordDelete={keyWordDelete}
          keyWordInput={keyWordInput}
          keyWord={keyWord}
          goToBack={goToBack}
        />
        {keyWord !== '' ? (
          <SearchDataList keyWordList={keyWordList} />
        ) : (
          <div>
            <CharacterBox />
            <CategoryBox />
          </div>
        )}
      </main>
    );
  }
}

export default Search;
