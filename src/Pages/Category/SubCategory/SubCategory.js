import React from 'react';
import './subCategory.scss';

class SubCategory extends React.Component {
  render() {
    const subCategory = ['전체', '여성', '남성', '양말'];
    return (
      <section class="subCategory">
        {subCategory.map(data => (
          <button>{data}</button>
        ))}
      </section>
    );
  }
}

export default SubCategory;
