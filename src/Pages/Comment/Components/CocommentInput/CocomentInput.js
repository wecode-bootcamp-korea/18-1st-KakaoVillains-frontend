import React from 'react';
import { FaArrowAltCircleUp, FaTimesCircle } from 'react-icons/fa';
import './CocommentInput.scss';

class CocomentInput extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      value: '',
      commentList: [],
      btnChangeValue: '',
    };
  }

  changeHandleBtnColor = () => {
    return this.state.btnChangeValue ? 'trueColor' : 'falseColor';
  };

  render() {
    const changeHandleBtnColor = this.state.value.length >= 1;
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
            <FaArrowAltCircleUp
              className={`${
                changeHandleBtnColor ? 'trueColor' : 'falseColor'
              } commentBtn2`}
            />
          </span>
        </button>
      </div>
    );
  }
}

export default CocomentInput;
