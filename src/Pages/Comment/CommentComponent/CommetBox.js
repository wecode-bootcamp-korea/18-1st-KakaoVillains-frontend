import React from 'react';
import { FaArrowAltCircleUp, FaRegHeart, FaTimesCircle } from 'react-icons/fa';

class CommentBox extends React.Component {
  render() {
    return (
      <div className="textContainer">
        <div className="name">양지은</div>
        <div className="textBox">
          <span>둘 다 최애캐ㅠㅠ</span>
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
          <div className="replyForm">
            <button className="deleteBtn">
              <span>
                <FaTimesCircle className="deleteIcon" />
              </span>
            </button>
            <textarea placeholder="답글을 달아주세요" className="replyBox" />
            <button className="cicleBtn2">
              <span>
                <FaArrowAltCircleUp className="commentBtn2" />
              </span>
            </button>
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
          </div>
        </div>
      </div>
    );
  }
}

export default CommentBox;
