/* eslint-disable prettier/prettier */
import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { BsChat } from 'react-icons/bs';
import { BsReply } from 'react-icons/bs';
import './CommentFeed.scss';

class CommentFeed extends React.Component {
  render() {
    return (
      <div className="feedPage">
        <div className="feedBox">
          <div className="feedBoxHeader">
            <div className="feedBoxHeaderImg">
              <img
                className="headerImg"
                src="https://t1.kakaocdn.net/friends/prod/main_tab/feed/npc_20210303144557.png"
                alt="이미지"
              />
            </div>
            <div className="nameAndTime">
              <div className="name">죠르디</div>
              <div className="time">시간</div>
            </div>
          </div>
          <div className="feedBoxImg">
            <img
              className="mainImg"
              src="https://t1.kakaocdn.net/friends/prod/main_tab/feed/media/media_0_20210308185146.jpg"
              alt="이미지"
            />
          </div>
          <div className="feedBoxIcon">
            <div className="heartIcon">
              <button>
                <FaRegHeart size="24" />
              </button>
            </div>
            <div className="chatIcon">
              <button>
                <BsChat size="24" />
              </button>
            </div>
            <div className="replyIcon">
              <button>
                <BsReply size="32" />
              </button>
            </div>
          </div>
          <div className="feedLikeCount">
            좋아요 <span className="feedLikeCountUpDown">165</span>개
          </div>
          <p className="feedContentTitle">
            나만의 멋진 사원증
            <br />
            언젠간 꼭 걸고 말거죨💚
          </p>
          <p className="feedContent">
            {' '}
            (웅성웅성) 3월 19일 죠르디 사원증이 출시된다구!{' '}
          </p>
        </div>
      </div>
    );
  }
}

export default CommentFeed;
