import React from 'react';
import { BiSearch } from 'react-icons/bi';
import './searchBox.scss';

class SearchBox extends React.Component {
  render() {
    return (
      <section className="searchBox">
        <div className="iconBox">
          <BiSearch className="searchIcon" />
          <input type="text" />
        </div>
        <button>취소</button>
      </section>
    );
  }
}

export default SearchBox;
