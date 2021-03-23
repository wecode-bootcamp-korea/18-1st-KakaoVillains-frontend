/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ShareModal from "./Modal/ShareModal";
import { withRouter } from "react-router-dom";
// import LoginModal from './Modal/LoginModal';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { BsReply } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import "./FeedList.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class FeedList extends React.Component {
  constructor() {
    super();
    this.state = {
      heartColor: true,
      isShareModalView: false,
      isLoginModalView: false,
    };
  }

  colorChangeBtn = () => {
    this.setState({ heartColor: !this.state.heartColor });
  };

  shareHandleModal = () => {
    this.setState({ isShareModalView: !this.state.isShareModalView }, () => {
      document.body.style.overflow = this.state.isShareModalView
        ? "hidden"
        : "unset";
    });
  };

  loginHandleModal = () => {
    this.setState({ isLoginModalView: !this.state.isLoginModalView }, () => {
      document.body.style.overflow = this.state.isLoginModalView
        ? "hidden"
        : "unset";
    });
  };

  goToFeedDetail = () => {
    this.props.history.push(`/feed/${this.props.id}`);
  };

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="feedBox">
        <div className="feedBoxHeader">
          <div className="feedBoxHeaderImg">
            <img
              className="headerImg"
              src={this.props.profile_picture}
              alt="이미지"
            />
          </div>
          <div className="nameAndTime">
            <div className="characterName">{this.props.username}</div>
            <div className="time">{this.props.datetime}</div>
          </div>
        </div>
        <StyledSlider className="feedBoxImg" {...settings}>
          {this.props.image_url.map((list, index) => (
            <img key={index} className="mainImg" src={list} alt="이미지" />
          ))}
        </StyledSlider>
        <div className="feedBoxIcon">
          {this.state.isLoginModalView ? "" : ""}
          {this.state.heartColor ? (
            <div className="heartIcon">
              <button onClick={this.colorChangeBtn}>
                <FaRegHeart size="24" />
              </button>
            </div>
          ) : (
            <div className="heartIconColorChange">
              <button onClick={this.colorChangeBtn}>
                <FaHeart color="red" size="24" />
              </button>
            </div>
          )}
          <div className="chatIcon">
            <button onClick={this.goToFeedDetail}>
              <BsChat size="24" />
            </button>
          </div>
          <div className="replyIcon">
            {this.state.isShareModalView && (
              <ShareModal shareHandleModal={this.shareHandleModal} />
            )}
            <button onClick={this.shareHandleModal}>
              <BsReply size="32" />
            </button>
          </div>
        </div>
        <div className="feedLikeCount">
          좋아요{" "}
          <span className="feedLikeCountUpDown">{this.props.like_count}</span>개
        </div>
        <p className="feedContentTitle">{this.props.title}</p>
        <p className="feedContent">{this.props.content}</p>
        <div className="feedReplyBox">
          <button onClick={this.goToFeedDetail} className="feedReplyBoxBtn">
            <div className="feedReplyCount">
              댓글{" "}
              <span className="feedReplyCountUpDown">
                {this.props.reply_count}
              </span>
              개
            </div>
            <div className="replyList">
              <span className="userName">{this.props.reply_username} </span>
              <p className="content">{this.props.reply}</p>
            </div>
            <div className="replyInput">
              <textarea placeholder="댓글을 달아주세요." />
            </div>
          </button>
        </div>
        {this.props.recommend_products.length > 0 && (
          <div className="productList">
            <ul>
              {this.props.recommend_products.map((data, index) => (
                <li key={index}>
                  <div className="product">
                    <div className="productImgInfo">
                      <img
                        className="productImg"
                        src={data.image_url}
                        alt="상품 이미지"
                      />
                      <div className="productInfo">
                        <div>{data.name}</div>
                        <div>{data.price.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="shoppingBtn">
                      <button>
                        <FiShoppingBag size="28" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(FeedList);

const StyledSlider = styled(Slider)`
  ul.slick-dots {
    margin-bottom: -20px;
  }

  .slick-prev {
    poacity: 0.6;
    margin-left: 45px;
    z-index: 9;
  }

  .slick-next {
    margin-right: 60px;
    poactiy: 0.6;
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
