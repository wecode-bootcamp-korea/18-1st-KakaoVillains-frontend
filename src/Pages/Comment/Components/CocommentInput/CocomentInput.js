import React from 'react';
import { FaArrowAltCircleUp, FaTimesCircle } from 'react-icons/fa';
import './CocommentInput.scss';

class CocomentInput extends React.Component {
  render() {
    return (
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
      </div>
    );
  }
}

export default CocomentInput;
