import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { withRouter } from 'react-router';
import './searchBox.scss';

class SearchBox extends React.Component {
  // goToSearchResult = e => {
  //   const keyword = e.target.value;
  //   this.props.history.push(`/category/character?keyword=${keyword}`); // 검색결과 페이지로 이동
  // };

  // pressEnter = e => {
  //   if (e.key === 'Enter') {
  //     this.goToSearchResult(e);
  //   }
  // };

  render() {
    const { keyWord, keyWordInput, keyWordDelete, toggleOff } = this.props;
    return (
      <section className="searchBox">
        <div className="iconBox">
          <BiSearch className="searchIcon" />
          <input
            onKeyPress={this.pressEnter}
            type="text"
            onChange={keyWordInput}
            value={keyWord}
          />
          {keyWord && <button onClick={keyWordDelete}>X</button>}
        </div>
        <button onClick={toggleOff}>취소</button>
      </section>
    );
  }
}

export default withRouter(SearchBox);
