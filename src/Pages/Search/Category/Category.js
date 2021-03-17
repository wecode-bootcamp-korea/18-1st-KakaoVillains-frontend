import React from 'react';
import './category.scss';

class Category extends React.Component {
  render() {
    const category = [
      '전체',
      '테마 기획전',
      '토이',
      '리빙',
      '잡화',
      '문구',
      '의류',
      '파자마',
      '여행/레저',
      '생활테크',
      '폰 액세서리',
      '식품',
    ];
    return (
      <section className="category">
        <h4>카테고리</h4>
        {category.map(data => (
          <button>{data}</button>
        ))}
      </section>
    );
  }
}

export default Category;
