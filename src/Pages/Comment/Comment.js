import React from 'react';
import { FaArrowAltCircleUp, FaSort } from 'react-icons/fa';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="commentContainer">
          <textarea
            placeholder="댓글을 달아주세요."
            className="inputBox"
            onChange={this.props.inputComment}
            value={this.props.value}
          />
          <FaArrowAltCircleUp
            className={`${
              this.props.changeHandleBtnColor ? 'trueColor' : 'falseColor'
            } commentBtn`}
            onClick={this.props.pressEnter}
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
