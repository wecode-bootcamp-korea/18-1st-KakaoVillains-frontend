import React from 'react';
import { BiSearch } from 'react-icons/bi';
import './searchBox.scss';

class SearchBox extends React.Component {
  render() {
    const { keyWord, keyWordInput, keyWordDelete, toggleOff } = this.props;
    return (
      <section className="searchBox">
        <div className="iconBox">
          <BiSearch className="searchIcon" />
          <input type="text" onChange={keyWordInput} value={keyWord} />
          {keyWord && <button onClick={keyWordDelete}>X</button>}
        </div>
        <button onClick={toggleOff}>취소</button>
      </section>
    );
  }
}

export default SearchBox;
