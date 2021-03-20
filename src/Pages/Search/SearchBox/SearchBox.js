import React from 'react';
import { BiSearch } from 'react-icons/bi';
import './searchBox.scss';

class SearchBox extends React.Component {
  render() {
    const { keyWord, keyWordInput, keyWordDelete, goToBack } = this.props;
    return (
      <section className="searchBox">
        <div className="iconBox">
          <BiSearch className="searchIcon" />
          <input type="text" onChange={keyWordInput} value={keyWord} />
          <button className={keyWord !== '' && 'btnOn'} onClick={keyWordDelete}>
            X
          </button>
        </div>
        <button onClick={goToBack}>취소</button>
      </section>
    );
  }
}

export default SearchBox;
