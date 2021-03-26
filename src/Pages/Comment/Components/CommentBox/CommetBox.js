import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import './CommentBox.scss';

class CommentBox extends React.Component {
  state = {
    changeLikedCount: false,
  };

  changeLikedCount = () => {
    this.setState({ changeLikedCount: !this.state.changeLikedCount });
  };

  render() {
    const { name, text, createdAt, handleCommentDelete } = this.props;
    const { changeLikedCount } = this.state;
    return (
      <div className="textContainer">
        <div className="name">{name}</div>
        <div className="delete" onClick={() => handleCommentDelete}>
          x
        </div>
        <div className="textBox">
          <span>{text}</span>
        </div>
        <div className="commentInfo">
          <span className="time">{createdAt}</span>
          <button className="heartBtn" onClick={this.changeLikedCount}>
            <span>
              <FaRegHeart
                className="heart"
                fill={changeLikedCount === true ? 'red' : 'gray'}
              />
            </span>
            <span className="likeCount" onClick={this.changeLikedCount}>
              {changeLikedCount === true ? '좋아요 1개' : ''}
            </span>
          </button>
          <button className="rereply">답글달기</button>
        </div>
      </div>
    );
  }
}

export default CommentBox;
