import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import './ReplyBox.scss';

class ReplyBox extends React.Component {
  constructor() {
    super();

    this.state = {
      changeLikedCount: false,
    };
  }

  changeLikedCount = () => {
    this.setState({ changeLikedCount: !this.state.changeLikedCount });
  };

  render() {
    return (
      <div className="rereplyContainer">
        <div className="name">죠르디</div>
        <div className="textBox">
          <span>좋아해줘서 고마워</span>
        </div>
        <div className="commentInfo">
          <span className="time">30분 전</span>
          <button className="heartBtn" onClick={this.changeLikedCount}>
            <span>
              <FaRegHeart
                className="heart"
                fill={this.state.changeLikedCount === true ? 'red' : 'gray'}
              />
            </span>
            <span className="likeCount" onClick={this.changeLikedCount}>
              {this.state.changeLikedCount === true ? '좋아요 1개' : '좋아요'}
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default ReplyBox;
