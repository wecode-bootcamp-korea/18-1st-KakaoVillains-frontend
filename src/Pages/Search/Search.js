import React from "react";
import CharacterBox from "./CharacterBox/CharacterBox";
import CategoryBox from "./CategoryBox/CategoryBox";
import SearchBox from "./SearchBox/SearchBox";
import SearchDataList from "./SearchDataList/SearchDataList";
import "./search.scss";

const IP = "";
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
    this.filterKeyword(e);
  };

  keyWordDelete = () => {
    this.setState({
      keyWord: "",
    });
  };

  filterKeyword = e => {
    fetch(`http://${IP}:8000/product/search?keyword=${e.target.value}`)
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
          <SearchDataList keyWordList={keyWordList} />
        ) : (
          <div className="CategoryBox">
            <CharacterBox />
            <CategoryBox />
          </div>
        )}
      </main>
    );
  }
}

export default Search;
