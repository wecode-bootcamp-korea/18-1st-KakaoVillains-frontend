import React from "react";
import CharacterBox from "./CharacterBox/CharacterBox";
import CategoryBox from "./CategoryBox/CategoryBox";
import SearchBox from "./SearchBox/SearchBox";
import SearchDataList from "./SearchDataList/SearchDataList";
import "./search.scss";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      keyWord: "",
      keyWordList: [],
    };
  }

  keyWordInput = e => {
    this.setState({
      keyWord: e.target.value,
    });
    this.filterKeyword();
  };

  keyWordDelete = () => {
    this.setState({
      keyWord: "",
    });
  };

  filterKeyword = () => {
    fetch("/data/searchData.json")
      // ?filter=${this.state.keyword}*/
      .then(res => res.json())
      .then(res =>
        this.setState({
          keyWordList: res,
        })
      );
  };

  goToCharacter = e => {
    const id = e.target.parentNode.parentNode.id;
    this.props.history.push(`/category/character?characterSeq=${id}`);
  };

  goToCategory = e => {
    const id = e.target.id;
    this.props.history.push(`/category/subject?categorySeq=${id}`);
  };

  render() {
    const { keyWord, keyWordList } = this.state;
    const { keyWordDelete, keyWordInput, goToCharacter, goToCategory } = this;
    return (
      <main className="search">
        <SearchBox
          keyWordDelete={keyWordDelete}
          keyWordInput={keyWordInput}
          keyWord={keyWord}
          toggleOff={this.props.toggleOff}
        />
        {keyWord ? (
          <SearchDataList keyWordList={keyWordList} />
        ) : (
          <div className="CategoryBox">
            <CharacterBox goToCharacter={goToCharacter} />
            <CategoryBox goToCategory={goToCategory} />
          </div>
        )}
      </main>
    );
  }
}

export default Search;
