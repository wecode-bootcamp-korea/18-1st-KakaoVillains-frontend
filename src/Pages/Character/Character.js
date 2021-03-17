import React from 'react';
import CharacterOption from './CharacterOption/CharacterOption';
import CharacterProduts from './CharacterProducts/ChracterProducts';
import './character.scss';

class Character extends React.Component {
  constructor() {
    super();
    this.state = {
      characterData: [],
    };
  }

  componentDidMount() {
    fetch('data/characterData.json')
      .then(res => res.json())
      .then(res =>
        this.setState({
          characterData: res,
        })
      );
  }

  render() {
    return (
      <main class="character">
        <CharacterOption />
        <section class="filter">
          <select>
            <option>신상품순</option>
            <option>판매량순</option>
            <option>낮은 가격순</option>
            <option>높은 가격순</option>
          </select>
        </section>
        <CharacterProduts characterData={this.state.characterData} />
      </main>
    );
  }
}

export default Character;
