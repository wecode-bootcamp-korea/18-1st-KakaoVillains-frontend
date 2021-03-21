import React from 'react';
import { FaFreebsd } from 'react-icons/fa';
import './Review.scss';

function getStars(rating) {
  const stars = [];
  const [whole, part] = parseFloat(rating).toString().split('.');
  for (let i = 0; i < whole; i++) stars.push(100);
  if (part) stars.push(50);
  for (let i = whole; i < (part ? 4 : 5); i++) stars.push(0);
  return stars;
}

class Review extends React.Component {
  render() {
    return (
      <div className="productComment">
        <p className="commentUser">{this.props.reviewer}</p>
        <div className="productUserGrade">
          {getStars.map(rating => (
            <img src={`/images/${rating}.png`} alt="stars" />
          ))}
          <span className="commentDate">{this.props.created_at}</span>
        </div>
        <p className="commentValue">{this.props.content}</p>
        <div className="commentLike">
          <button>
            <FaFreebsd className="likeBtnIcon" />
            좋아요 {this.props.like_count}명
          </button>
        </div>
      </div>
    );
  }
}

export default Review;
