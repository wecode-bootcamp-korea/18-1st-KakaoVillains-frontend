import React from 'react';
import './subCategory.scss';

class SubCategory extends React.Component {
  render() {
    return (
      <section class="subCategory" value={this.props.character}>
        {SUBCATEGORY.map((data, idx) => (
          <button key={idx} keyonClick={this.props.sortingSubCategory}>
            {data}
          </button>
        ))}
      </section>
    );
  }
}

export default SubCategory;

const SUBCATEGORY = ['전체', '여성', '남성', '양말'];
