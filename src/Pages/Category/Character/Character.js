import React from 'react';
import Option from './Option/Option';
import Products from './Products/Products';
import Filter from './Filter/Filter';
import Footer from '../../../Components/Footer';
import './character.scss';

class Character extends React.Component {
  constructor() {
    super();
    this.state = {
      characterData: [],
      character: '',
    };
  }

  componentDidMount() {
    fetch(
      `http://10.58.2.121:8000/product/category/character&sort=creatDatetime,desc`
    )
      .then(res => res.json())
      .then(res =>
        this.setState({
          characterData: res.result,
          character: '전체',
        })
      );
  }

  goToCharacterMain = () => {
    this.props.history.push(`/category/character`);
    this.componentDidMount();
  };

  changeCharacter = e => {
    const characterId = CHANGE_CHARACTER[e.target.value];
    this.props.history.push(`/category/character?characterSeq=${characterId}`);
    this.setState({
      character: e.target.value,
    });
    // fetch(
    //   `http://10.58.7.99:8000/product/category/character?characterSeq=${characterId}`
    // )
    //   .then(res => res.json())
    //   .then(res =>
    //     this.setState({
    //       characterData: res.result.product,
    //       character: e.target.value,
    //     })
    //   );
  };

  sortingSequence = e => {
    const characterId = CHANGE_CHARACTER[this.state.character];
    const sortId = SORTDATA[e.target.value];
    this.props.history.push(
      `/category/character/character?characterSeq=${characterId}&sort=${sortId}`
    );
    // fetch(
    //   `/category/character/character?characterSeq=${characterId}&sort=${sortId}`
    // )
    //   .then(res => res.json())
    //   .then(res =>
    //     this.setState({
    //       characterData: res,
    chr;
    //     })
    //   );
  };

  render() {
    const { character, characterData } = this.state;
    const { goToCharacterMain, changeCharacter, sortingSequence } = this;
    return (
      <>
        <main className="character">
          <Option
            changeCharacter={
              character === '전체' ? goToCharacterMain : changeCharacter
            }
            character={character}
          />
          <Filter sortingSequence={sortingSequence} />
          <Products data={characterData} />
        </main>
        <Footer />
      </>
    );
  }
}

export default Character;

const SORTDATA = {
  신상품순: 'createDatetime,desc',
  판매량순: 'sellCount,desc',
  '낮은 가격순': 'salePrice,asc',
  '높은 가격순': 'salePrice,desc',
};

const CHANGE_CHARACTER = {
  전체: 0,
  아몬드: 1,
  자이제: 2,
  준식: 3,
  죠르디: 4,
  칸: 5,
  타이거: 6,
  토끼: 7,
  팬다어덜트: 8,
  프라다: 9,
  피치피치: 10,
  고냥이: 11,
  꾀돌이: 12,
  단무지: 13,
  두부: 14,
};
