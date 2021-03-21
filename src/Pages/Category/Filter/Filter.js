import React from 'react';
import './filter.scss';

class Filter extends React.Component {
  render() {
    return (
      <section class="filter">
        {/* {isCategory && (
          <select>
            <option>전체</option>
            <option>준식</option>
            <option>꾀돌이</option>
            <option>자이제</option>
          </select>
        )} */}
        <select>
          <option>신상품순</option>
          <option>판매량순</option>
          <option>낮은 가격순</option>
          <option>높은 가격순</option>
        </select>
      </section>
    );
  }
}

export default Filter;
