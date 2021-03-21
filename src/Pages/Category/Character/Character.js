import React from 'react';
import Option from './Option/Option';
import Products from './Products/Products';
import Filter from './Filter/Filter';
import './character.scss';

class Character extends React.Component {
  constructor() {
    super();
    this.state = {
      characterData: [],
    };
  }

  componentDidMount() {
    fetch('/data/전체.json')
      .then(res => res.json())
      .then(res =>
        this.setState({
          characterData: res,
        })
      );
  }

  changeCharacter = e => {
    this.props.history.push(`/category/character/${e.target.value}`);
    fetch(`/data/${e.target.value}.json`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          characterData: res,
        })
      );
  };

  sortingSequence = e => {
    this.props.history.push(
      `/category/character/${this.props.match.params.character}/${e.target.value}`
    );
    // fetch(`sortingAPI`)
    //   .then(res => res.json())
    //   .then(res =>
    //     this.setState({
    //       characterData: res,
    //     })
    //   );
  };

  render() {
    return (
      <main class="character">
        <div>
          <Option changeCharacter={this.changeCharacter} />
          <Filter sortingSequence={this.sortingSequence} />
          <Products data={this.state.characterData} />
        </div>
      </main>
    );
  }
}

export default Character;
