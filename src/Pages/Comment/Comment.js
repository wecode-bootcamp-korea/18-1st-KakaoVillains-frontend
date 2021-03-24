import React from 'react';
//import CommentBox from '../Comment/Components/CommentBox/CommetBox';
import { FaArrowAltCircleUp, FaSort } from 'react-icons/fa';
import './Comment.scss';

class Comment extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      value: '',
      commentList: [],
      btnChangeValue: '',
      page: 1,
    };
  }

  inputComment = e => {
    this.setState({ value: e.target.value });
  };

  pressEnter = async e => {
    await fetch('http://10.58.4.39:8000/feed/reply?feed_id=1', {
      method: 'POST',
      body: JSON.stringify({
        id: this.state.id,
        content: this.state.value,
      }),
    })
      .then(res => res.json())
      .then(res => res.status);

    e.preventDefault();
    if (this.state.value === '') {
      alert('내용을 입력해주세요');
      return;
    }
    this.setState({
      commentList: this.state.commentList.concat([
        {
          userId: this.state.id,
          content: this.state.value,
        },
      ]),
    });
  };

  changeHandleBtnColor = () => {
    return this.state.btnChangeValue ? 'trueColor' : 'falseColor';
  };

  handleCommentDelete = index => {
    this.setState({
      commentList: this.state.commentList.filter((_, idx) => idx !== index),
    });
  };

  render() {
    const changeHandleBtnColor = this.state.value.length >= 1;
    return (
      <>
        <div className="commentContainer">
          <textarea
            placeholder="댓글을 달아주세요."
            className="inputBox"
            onChange={this.inputComment}
            value={this.state.value}
          />
          <FaArrowAltCircleUp
            className={`${
              changeHandleBtnColor ? 'trueColor' : 'falseColor'
            } commentBtn`}
            onClick={this.pressEnter}
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
