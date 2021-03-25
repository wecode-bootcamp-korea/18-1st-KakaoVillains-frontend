import React from 'react';
import './option.scss';

class Option extends React.Component {
  render() {
    return (
      <section class="option">
        <select onChange={this.props.changeSubject}>
          <option>카테고리전체</option>
          {CATEGORY.map(data => (
            <option key={data.id}>{data.name}</option>
          ))}
        </select>
      </section>
    );
  }
}

export default Option;

const CATEGORY = [
  {
    id: 1,
    name: '테마 기획전',
  },
  {
    id: 2,
    name: '토이',
  },
  {
    id: 3,
    name: '리빙',
  },
  {
    id: 4,
    name: '잡화',
  },
  {
    id: 5,
    name: '문구',
  },
  {
    id: 6,
    name: '의류',
  },
  {
    id: 7,
    name: '파자마',
  },
  {
    id: 8,
    name: '여행/레저',
  },
  {
    id: 9,
    name: '생활테크',
  },
  {
    id: 10,
    name: '폰 액세서리',
  },
  {
    id: 11,
    name: '식품',
  },
];
