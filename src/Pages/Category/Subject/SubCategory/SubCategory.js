import React from 'react';
import './subCategory.scss';

class SubCategory extends React.Component {
  render() {
    return (
      <section class="subCategory">
        {subCategory.map(data => (
          <button onClick={this.props.sortingSubCategory}>{data}</button>
        ))}
      </section>
    );
  }
}

export default SubCategory;

const subCategory = ['전체', '여성', '남성', '양말'];
