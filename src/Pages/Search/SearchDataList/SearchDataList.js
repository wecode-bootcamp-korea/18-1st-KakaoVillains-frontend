import React from "react";
import { Link } from "react-router-dom";
import "./searchDataList.scss";

class SearchDataList extends React.Component {
  render() {
    const { keyWordList } = this.props;
    return (
      <section className="searchDataList">
        {!keyWordList ? (
          <div className="noResult">검색결과가 없습니다.</div>
        ) : (
          <ul>
            {keyWordList.map(data => (
              <li key={data.id}>
                <Link to={`/product/${data.id}`}>{data.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}

export default SearchDataList;
