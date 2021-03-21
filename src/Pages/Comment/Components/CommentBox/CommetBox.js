import React from 'react';
import CocomentInput from '../CocommentInput/CocomentInput';
import ReplyBox from '../ReplyBox/ReplyBox';
import { FaRegHeart } from 'react-icons/fa';
import './CommentBox.scss';

class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      changeLikedColor: false,
    };
  }

  changeLikedColor = () => {
    this.setState({ changeLikedColor: !this.state.changeLikedColor });
  };

  render() {
    const { name, text } = this.props;
    //console.log(text);
    return (
      <div className="textContainer">
        <div className="name">양지은{name}</div>
        <div
          className="delete"
          onClick={() => this.props.handleCommentDelete(this.props.index)}
        >
          x
        </div>
        <div className="textBox">
          <span>{text}</span>
        </div>
        <div className="commentInfo">
          <span className="time">41분 전</span>
          <button className="heartBtn" onClick={this.changeLikedColor}>
            <span>
              <FaRegHeart
                className="heart"
                fill={this.state.changeLikedColor === true ? 'red' : 'gray'}
              />
            </span>
            <span className="likeCount">
              좋아요 {this.changeLikedColor ? +1 : 0}개
            </span>
          </button>
          <button className="rereply">답글달기</button>
          <CocomentInput />
          <ReplyBox />
        </div>
      </div>
    );
  }
}

export default CommentBox;
