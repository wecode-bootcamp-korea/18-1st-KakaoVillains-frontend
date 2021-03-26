import React from 'react';
import CharacterBox from './CharacterBox/CharacterBox';
import CategoryBox from './CategoryBox/CategoryBox';
import SearchBox from './SearchBox/SearchBox';
import SearchDataList from './SearchDataList/SearchDataList';
import './search.scss';

const IP = '54.180.24.190';
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      keyWord: '',
      keyWordList: [],
    };
  }

  keyWordInput = e => {
    this.setState({
      keyWord: e.target.value,
    });
    this.filterKeyword(e);
  };

  keyWordDelete = () => {
    this.setState({
      keyWord: '',
    });
  };

  filterKeyword = e => {
    let keyword = e.target.value;
    if (keyword === '') {
      keyword = '준';
    }
    fetch(`http://${IP}:8000/product/search?keyword=${keyword}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          keyWordList: res.result,
        })
      );
  };

  render() {
    const { keyWord, keyWordList } = this.state;
    const { keyWordDelete, keyWordInput } = this;
    return (
      <main className="search">
        <SearchBox
          keyWordDelete={keyWordDelete}
          keyWordInput={keyWordInput}
          keyWord={keyWord}
          toggleOff={this.props.toggleOff}
        />
        {keyWord ? (
          <SearchDataList
            keyWordList={keyWordList}
            toggleOff={this.props.toggleOff}
          />
        ) : (
          <div className="CategoryBox">
            <CharacterBox toggleOff={this.props.toggleOff} />
            <CategoryBox toggleOff={this.props.toggleOff} />
          </div>
        )}
      </main>
    );
  }
}

export default Search;
