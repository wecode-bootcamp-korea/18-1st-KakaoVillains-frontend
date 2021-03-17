import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import './ReplyBox.scss';

class ReplyBox extends React.Component {
  render() {
    return (
      <div className="rereplyContainer">
        <div className="name">죠르디</div>
        <div className="textBox">
          <span>좋아해줘서 고마워</span>
        </div>
        <div className="commentInfo">
          <span className="time">30분 전</span>
          <button className="heartBtn">
            <span>
              <FaRegHeart className="heart" />
            </span>
            <span className="likeCount">좋아요 100개</span>
          </button>
        </div>
      </div>
    );
  }
}

export default ReplyBox;
