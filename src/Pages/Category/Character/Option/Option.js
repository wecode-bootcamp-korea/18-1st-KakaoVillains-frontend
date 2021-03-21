import React from 'react';
import './option.scss';

class Option extends React.Component {
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
    return (
      <section class="option">
        <select onChange={this.props.changeCharacter}>
          <option>전체</option>
          {this.state.characterList.map(data => (
            <option key={data.id}>{data.name}</option>
          ))}
        </select>
      </section>
    );
  }
}

export default Option;
