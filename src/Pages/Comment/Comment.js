import React from 'react';
import { FaArrowAltCircleUp, FaSort } from 'react-icons/fa';
import SubNav from '../../Components/SubNav';
import CommentFeed from '../Comment/CommentComponent/CommentFeed';
import CommentBox from '../Comment/CommentComponent/CommetBox';
import Footer from '../../Components/Footer';
import './Comment.scss';

class Comment extends React.Component {
  //   constructor() {
  //     super();

  //     this.state = {
  //       value: '',
  //       commentList: [
  //         {
  //           name: '',
  //           text: '',
  //         },
  //       ],
  //     };
  //   }

  //   inputComment = (e) => {
  //     this.setState({ value: e.target.value });
  //   };
  // }

  render() {
    const title = '게시물';
    return (
      <>
        <SubNav title={title} />
        <CommentFeed />
        <div className="commentContainer">
          <textarea placeholder="댓글을 달아주세요." className="inputBox" />
          <FaArrowAltCircleUp className="commentBtn" />
        </div>
        <div className="replyContainer">
          <button className="replyBtn">
            <span className="recently">최신순 </span>
            <span className="downIcon">
              <FaSort className="sortIcon" />
            </span>
          </button>
          <CommentBox />
          <CommentBox />
          <div className="moreContainer">
            <button id="moreBtn">더보기+</button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Comment;
