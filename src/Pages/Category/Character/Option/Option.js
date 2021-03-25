import React from 'react';
import './option.scss';

class Option extends React.Component {
  render() {
    const { category, changeCategory } = this.props;
    return (
      <section className={`option ${category}`}>
        <select onChange={changeCategory}>
          <option>전체</option>
          {(window.location.pathname === '/category/subject'
            ? SUBJECT
            : CHARACTER
          ).map(data => (
            <option data-idx={data.id} key={data.id}>
              {data.name}
            </option>
          ))}
        </select>
      </section>
    );
  }
}

export default Option;

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

const SUBJECT = [
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
