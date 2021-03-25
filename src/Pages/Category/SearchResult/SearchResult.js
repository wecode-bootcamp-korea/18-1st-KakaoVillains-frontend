import React from 'react';
import SubNav from './CharacterBox/CharacterBox';
import Filter from '../Subject/Filter/Filter';
import SubNav from '../../Components/SubNav';
import Products from '../Subject/Products/FProductsilter';
import Footer from '../../Components/Footer';
import './SearchResult.scss';

class SearchResult extends React.Component {
  render() {
    const ResultKeyword = decodeURI.window.location.search.split('=')[1];
    return (
      <div>
        <SubNav />
        <div>'{ResultKeyword}' 검색결과</div>
        {result.length === 0 ? (
          <div>
            <Filter />
            <Products />
          </div>
        ) : (
          <div>검색결과가 없습니다.</div>
        )}
        <Footer />
      </div>
    );
  }
}
export default SearchResult;
