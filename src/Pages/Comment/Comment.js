import React from 'react';
//import uuid from 'react-uuid';
import SubNav from '../../Components/SubNav';
import CommentFeed from '../Comment/Components/CommentFeed/CommentFeed';
import CommentBox from '../Comment/Components/CommentBox/CommetBox';
import Footer from '../../Components/Footer';
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
    };
  }

  componentWillMount() {
    const commentList = localStorage.commentList;
    if (commentList) {
      this.setState({
        commentList: JSON.parse(commentList),
      });
    }
  }

  componentDidUpdate(prevprops, prevState) {
    if (
      JSON.stringify(prevState.commentList) !==
      JSON.stringify(this.state.commentList)
    ) {
      localStorage.commentList = JSON.stringify(this.state.commentList);
    }
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
          name: this.state.id,
          text: this.state.value,
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
    const title = '게시물';
    const changeHandleBtnColor = this.state.value.length >= 1;
    //console.log(this.state.value);
    //console.log(this.state.commentList);
    return (
      <>
        <SubNav title={title} />
        <CommentFeed />
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
          {this.state.commentList
            .slice(0)
            .reverse()
            .map((el, idx) => {
              // console.log(el);
              return (
                <CommentBox
                  key={idx}
                  name={el.name}
                  text={el.text}
                  index={idx}
                  handleCommentDelete={this.handleCommentDelete}
                />
              );
            })}
        </div>
        <div className="moreContainer">
          <button id="moreBtn">더보기+</button>
        </div>
        <Footer />
      </>
    );
  }
}

export default Comment;
