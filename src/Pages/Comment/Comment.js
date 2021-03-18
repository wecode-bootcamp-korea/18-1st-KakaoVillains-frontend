import React from 'react';
import { FaArrowAltCircleUp, FaSort } from 'react-icons/fa';
import SubNav from '../../Components/SubNav';
import CommentFeed from '../Comment/Components/CommentFeed/CommentFeed';
import CommentBox from '../Comment/Components/CommentBox/CommetBox';
import Footer from '../../Components/Footer';
import './Comment.scss';

class Comment extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      value: '',
      commentList: [
        {
          name: '',
          text: '',
        },
      ],
    };
  }

  inputComment = e => {
    //console.log(e.target.value);
    this.setState({ value: e.target.value });
  };

  pressEnter = e => {
    // console.log(this.state.CommentList);
    this.setState({
      commentList: this.state.commentList.concat([
        {
          name: this.state.id,
          text: this.state.value,
        },
      ]),
    });
  };

  render() {
    const title = '게시물';
    //console.log(this.state.value);
    console.log(this.state.commentList);
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
            className="commentBtn"
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
          {this.state.commentList.map(el => {
            // console.log(el);
            return <CommentBox key={el.key} name={el.name} text={el.text} />;
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
