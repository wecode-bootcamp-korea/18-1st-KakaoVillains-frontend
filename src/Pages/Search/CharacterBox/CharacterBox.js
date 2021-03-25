import React from 'react';
import { withRouter } from 'react-router';
import './characterBox.scss';

class CharacterBox extends React.Component {
  goToCharacter = e => {
    const id = e.target.parentNode.parentNode.id;
    this.props.history.push(`/category/character?characterSeq=${id}`);
  };
  render() {
    return (
      <section className="characterBox">
        {CHARACTER.map(data => (
          <div className="character" id={data.id} key={data.id}>
            <button onClick={this.goToCharacter}>
              <img alt={data.name} src={data.img} />
            </button>
            <p>{data.name}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default withRouter(CharacterBox);

const CHARACTER = [
  {
    id: 1,
    name: '아몬드',
    img: 'https://i.imgur.com/g6EO7M8.jpeg',
  },
  {
    id: 2,
    name: '자이제',
    img: 'https://i.imgur.com/SmnwZ5k.jpeg',
  },
  {
    id: 3,
    name: '준식',
    img: 'https://i.imgur.com/afE3B1w.jpeg',
  },
  {
    id: 4,
    name: '죠르디',
    img: 'https://i.imgur.com/0D7b1Gt.jpeg',
  },
  {
    id: 5,
    name: '칸',
    img: 'https://i.imgur.com/aBgta2g.jpeg',
  },
  {
    id: 6,
    name: '타이거',
    img: 'https://i.imgur.com/gS2qkRm.jpeg',
  },
  {
    id: 7,
    name: '토끼',
    img: 'https://i.imgur.com/GUYCYz3.jpeg',
  },
  {
    id: 8,
    name: '팬다어덜트',
    img: 'https://i.imgur.com/TU1FnCc.jpeg',
  },
  {
    id: 9,
    name: '프라다',
    img: 'https://imgur.com/aVZRvOM.jpeg',
  },
  {
    id: 10,
    name: '피치피치',
    img: 'https://i.imgur.com/nWND0Ix.jpeg',
  },
  {
    id: 11,
    name: '고냥이',
    img: 'https://i.imgur.com/Wp2Sekm.jpeg',
  },
  {
    id: 12,
    name: '꾀돌이',
    img: 'https://i.imgur.com/zsRgvbU.jpeg',
  },
  {
    id: 13,
    name: '단무지',
    img: 'https://i.imgur.com/9b6bpMt.jpeg',
  },
  {
    id: 14,
    name: '두부',
    img: 'https://i.imgur.com/Qn3dhMl.jpeg',
  },
];
