/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick"; 
import { FaRegHeart } from 'react-icons/fa';
import { BsChat } from 'react-icons/bs';
import { BsReply } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';
import './mainPageFeed.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSlider = styled(Slider)`
    ul.slick-dots {
      margin-bottom: -20px;
    }

    .slick-prev {
      poacity: .6;
      margin-left: 45px;
      z-index: 9;
    }

    .slick-next {
      margin-right: 60px;
      poactiy: .6;
    }

    .slick-prev:before {
      color: black;
      font-size: 30px;
    }
    .slick-next:before {
      color: black;
      font-size: 30px;
    }

    .slick-disabled {
      display: none !important;
    }
    
`;

class FeedList extends React.Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     feedList: [],
  //   }
  // }
  
  render() {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

    return (
      <div className="feedPage">
        <div className="feedBox">
          <div className="feedBoxHeader">
            <div className="feedBoxHeaderImg">
              <img  className="headerImg" src={this.props.profile_picture} alt="이미지" />
            </div>
            <div className="nameAndTime">
              <div className="characterName">{this.props.username}</div>
              <div className="time">시간</div>
            </div>
          </div>
          <StyledSlider className="feedBoxImg" {...settings}>
             {this.props.img_url.map((img) => <img className="mainImg" src={img.img_url} alt="이미지" /> )}
          </StyledSlider>
          <div className="feedBoxIcon">
            <div className="heartIcon">
              <button><FaRegHeart size="24" /></button>
            </div>
            <div  className="chatIcon">   
              <button><BsChat size="24" /></button>
            </div>
            <div  className="replyIcon">
              <button><BsReply size="32" /></button>
            </div>
          </div>
          <div className="feedLikeCount">좋아요 <span className="feedLikeCountUpDown">{this.props.like_count}</span>개</div>
          <p className="feedContentTitle"> {this.props.title}
          </p>
          <p className="feedContent">{this.props.content}</p>
          <div className="feedReplyBox">
            <button className="feedReplyBoxBtn">
              <div className="feedReplyCount">댓글 <span className="feedReplyCountUpDown">{this.props.reply_count}</span>개</div> 
              <ul className="replyList">
                <li className="reply">{this.props.reply_username} {this.props.reply}</li>
              </ul>
              <div className="replyInput">
                <textarea placeholder="댓글을 달아주세요." />
              </div>
            </button>
            <div className="productList">
              <ul>
                <li>
                  <div className="product">
                    <div className="productImgInfo">
                      <img className="productImg" src="https://t1.daumcdn.net/friends/prod/product/20210308161640247_8809721507544_AW_00.jpg" alt="상품 이미지" />
                      <div className="productInfo">
                        <div>피치피치 토스터기</div>
                        <div>49,000원</div>
                      </div>
                    </div> 
                    <div className="shoppingBtn">
                      <button><FiShoppingBag size="28" /></button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="product">
                    <div className="productImgInfo">
                      <img className="productImg" src="https://t1.daumcdn.net/friends/prod/product/20210308161640247_8809721507544_AW_00.jpg" alt="상품 이미지" />
                      <div className="productInfo">
                        <div>피치피치 토스터기</div>
                        <div>49,000원</div>
                      </div>
                    </div> 
                    <div className="shoppingBtn">
                      <button><FiShoppingBag size="28" /></button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
           </div>
        </div>
      </div>
    );
  }
}

export default FeedList;
