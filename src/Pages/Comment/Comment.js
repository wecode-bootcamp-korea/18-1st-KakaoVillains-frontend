import React from 'react';
import { FaArrowAltCircleUp, FaSort } from 'react-icons/fa';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    const {
      inputComment,
      value,
      changeHandleBtnColor,
      pressEnter,
    } = this.props;
    return (
      <>
        <div className="commentContainer">
          <textarea
            placeholder="댓글을 달아주세요."
            className="inputBox"
            onChange={inputComment}
            value={value}
          />
          <FaArrowAltCircleUp
            className={`${
              changeHandleBtnColor ? 'trueColor' : 'falseColor'
            } commentBtn`}
            onClick={() => pressEnter}
          />
        </div>
        <div className="replyContainer">
          <button className="replyBtn">
            <span className="recently">최신순 </span>
            <span className="downIcon">
              <FaSort className="sortIcon" />
            </span>
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
