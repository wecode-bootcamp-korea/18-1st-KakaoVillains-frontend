import React from 'react';
import './filter.scss';

class Filter extends React.Component {
  render() {
    const { sortingSequence } = this.props;
    return (
      <section class="filter">
        <select onChange={sortingSequence}>
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
