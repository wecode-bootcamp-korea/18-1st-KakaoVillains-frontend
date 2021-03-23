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
      id: '아무개',
      value: '',
      commentList: [],
      btnChangeValue: '',
      page: 1,
    };
  }

  componentDidMount = () => {
    fetch('/data/commentData.json')
      //`http://10.58.5.183:8000/feed/${this.state.page}`, {
      // method: 'GET',
      //   body: JSON.stringify({
      //     : this.state.id,
      //     password: this.state.password,
      //   }),
      .then(res => res.json())
      .then(data =>
        this.setState({
          commentList: data,
        })
      );
  };

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
    console.log(this.state.commentList.result);
    const title = '게시물';
    const changeHandleBtnColor = this.state.value.length >= 1;
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
        <div className="moreContainer">
          <button id="moreBtn">더보기+</button>
        </div>
        <Footer />
      </>
    );
  }
}

export default Comment;
