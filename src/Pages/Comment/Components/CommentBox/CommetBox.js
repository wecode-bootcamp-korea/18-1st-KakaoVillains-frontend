import React from 'react';
import CocomentInput from '../CocommentInput/CocomentInput';
import ReplyBox from '../ReplyBox/ReplyBox';
import { FaRegHeart } from 'react-icons/fa';
import './CommentBox.scss';

class CommentBox extends React.Component {
  render() {
    const { name, text } = this.props;
    //console.log(text);
    return (
      <div className="textContainer">
        <div className="name">양지은{name}</div>
        <div className="textBox">
          <span>{text}</span>
        </div>
        <div className="commentInfo">
          <span className="time">41분 전</span>
          <button className="heartBtn">
            <span>
              <FaRegHeart className="heart" />
            </span>
            <span className="likeCount">좋아요 1개</span>
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
