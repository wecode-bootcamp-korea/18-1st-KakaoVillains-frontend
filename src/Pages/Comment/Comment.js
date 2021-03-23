import React from 'react';
import SubNav from '../../Components/SubNav';
import CommentBox from '../Comment/Components/CommentBox/CommetBox';
import { FaArrowAltCircleUp, FaSort } from 'react-icons/fa';
import './Comment.scss';

class Comment extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '아무개',
      value: '',
      commentList: [],
      btnChangeValue: '',
      page: 1,
    };
  }

  inputComment = e => {
    //console.log(e.target.value);
    this.setState({ value: e.target.value });
  };

  pressEnter = e => {
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
    //console.log(this.state.content);
    console.log(this.state.commentList);
    const title = '게시물';
    const changeHandleBtnColor = this.state.value.length >= 1;
    return (
      <>
        <SubNav title={title} />
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
        <div className="textBox">
          {this.state.commentList.map((comment, index) => {
            return (
              <CommentBox
                index={index}
                key={comment.id}
                name={comment.userId}
                text={comment.content}
                likeCount={comment.likeCount}
                createdAt={comment.createdAt}
                handleCommentDelete={this.handleCommentDelete}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Comment;
