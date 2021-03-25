import React from 'react';
import './subCategory.scss';

class SubCategory extends React.Component {
  render() {
    const { goToSubCategory, subCategory } = this.props;
    return (
      <section class="subCategory">
        {SUBCATEGORY.map(data => (
          <button
            data-value={data.name}
            data-idx={data.id}
            key={data.id}
            keyonClick={goToSubCategory}
          >
            {data.name}
          </button>
        ))}
      </section>
    );
  }
}

export default SubCategory;

const SUBCATEGORY = [
  { id: 1, name: '컵/텁블러' },
  { id: 2, name: '주방용품' },
];
