import React from 'react';

class Rating extends React.Component {
  getStars = value => {
    const stars = [];
    const [whole, part] = parseFloat(value).toString().split('.');
    for (let i = 0; i < whole; i++) stars.push(100);
    if (part) stars.push(50);
    for (let i = whole; i < (part ? 4 : 5); i++) stars.push(0);
    return stars;
  };
  render() {
    console.log(this.getStars());
    return (
      <div className="star">
        {this.getStars(this.props.value).map(value => (
          <img src={`/images/${value}.png`} alt="stars" />
        ))}
      </div>
    );
  }
}

export default Rating;
