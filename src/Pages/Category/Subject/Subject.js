import React from 'react';
import Option from './Option/Option';
import Products from './Products/Products';
import SubCategory from './SubCategory/SubCategory';
import Filter from './Filter/Filter';
import Footer from '../../../Components/Footer';
import './subject.scss';

class Subject extends React.Component {
  constructor() {
    super();
    this.state = {
      characterData: [],
    };
  }

  componentDidMount() {
    fetch(
      `http://10.58.2.121:8000/product/category/subject&sort=creatDatetime,desc`
    )
      .then(res => res.json())
      .then(res =>
        this.setState({
          characterData: res,
        })
      );
  }

  changeSubject = e => {
    this.props.history.push(`/category/subject/${e.target.value}`);
    fetch(`/data/${e.target.value}.json`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          characterData: res,
        })
      );
  };

  sortingSubCategory = e => {
    this.props.history.push(
      `/category/subject/${this.props.match.params.subject}/${e.target.outerText}`
    );
    // fetch(`sortingAPI`)
    //   .then(res => res.json())
    //   .then(res =>
    //     this.setState({
    //       characterData: res,
    //     })
    //   );
  };

  sortingCharacter = e => {
    this.props.history.push(
      `/category/subject/${this.props.match.params.subject}/${this.props.match.params.SubCategory}/${e.target.value}`
    );
    // fetch(`sortingAPI`)
    //   .then(res => res.json())
    //   .then(res =>
    //     this.setState({
    //       characterData: res,
    //     })
    //   );
  };

  sortingSequence = e => {
    this.props.history.push(
      `/category/subject/${this.props.match.params.subject}/${this.props.match.params.SubCategory}/${this.props.match.params.character}/${e.target.value}`
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
    console.log(this.state.characterData);
    return (
      <>
        <main class="subject">
          <div>
            <Option changeSubject={this.changeSubject} />
            <SubCategory sortingSubCategory={this.sortingSubCategory} />
            <Filter
              sortingCharacter={this.sortingCharacter}
              sortingSequence={this.sortingSequence}
            />
            <Products data={this.state.characterData} />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Subject;
