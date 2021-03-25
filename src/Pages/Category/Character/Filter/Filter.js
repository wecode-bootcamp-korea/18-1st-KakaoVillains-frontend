import React from 'react';
import './filter.scss';

class Filter extends React.Component {
  render() {
    const { sortingSequence, sortingCharacter } = this.props;
    return (
      <section className="filter">
        {window.location.pathname === '/category/subject' && (
          <select onChange={sortingCharacter}>
            <option>캐릭터 전체</option>
            {CHARACTER.map(data => (
              <option key={data.id}>{data.name}</option>
            ))}
          </select>
        )}
        <select onChange={sortingSequence}>
          <option>신상품순</option>
          <option>낮은 가격순</option>
          <option>높은 가격순</option>
        </select>
      </section>
    );
  }
}

export default Filter;

const CHARACTER = [
  {
    id: 1,
    name: '아몬드',
  },
  {
    id: 2,
    name: '자이제',
  },
  {
    id: 3,
    name: '준식',
  },
  {
    id: 4,
    name: '죠르디',
  },
  {
    id: 5,
    name: '칸',
  },
  {
    id: 6,
    name: '타이거',
  },
  {
    id: 7,
    name: '토끼',
  },
  {
    id: 8,
    name: '팬다어덜트',
  },
  {
    id: 9,
    name: '프라다',
  },
  {
    id: 10,
    name: '피치피치',
  },
  {
    id: 11,
    name: '고냥이',
  },
  {
    id: 12,
    name: '꾀돌이',
  },
  {
    id: 13,
    name: '단무지',
  },
  {
    id: 14,
    name: '두부',
  },
];
