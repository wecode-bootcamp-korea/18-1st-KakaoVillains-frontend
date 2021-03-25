import React from 'react';
import './filter.scss';

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      characterList: [],
    };
  }

  componentDidMount() {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(res =>
        this.setState({
          characterList: res,
        })
      );
  }
  render() {
    const { sortingSequence, sortingCharacter } = this.props;
    return (
      <section class="filter">
        <select onChange={sortingCharacter}>
          <option>캐릭터 전체</option>
          {this.state.characterList.map(data => (
            <option key={data.id}>{data.name}</option>
          ))}
        </select>
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
