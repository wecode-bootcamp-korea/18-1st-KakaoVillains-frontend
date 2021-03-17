import React from 'react';
import Option from './CharacterOption/Option';
import Produts from './CharacterProducts/Products';
import SubCategory from './SubCategory/SubCategory';
import Filter from './Filter/Filter';
import './character.scss';

class Category extends React.Component {
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
      <main class="category">
        <Option />
        {/* {isSubCategory && <SubCategory />} */}
        <Filter />
        <Produts characterData={this.state.characterData} />
      </main>
    );
  }
}

export default Category;
