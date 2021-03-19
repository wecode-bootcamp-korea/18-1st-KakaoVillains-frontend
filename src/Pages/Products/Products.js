import React from 'react';
import SubNav from '../../Components/SubNav';
import Footer from '../../Components/Footer';
import { FaRegStar, FaFreebsd, FaShareAlt, FaAngleDown } from 'react-icons/fa';
import { BsPencil, BsDot, BsFillChatFill } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';
import './Products.scss';
import '../../Styles/reset.scss';
import '../../Styles/common.scss';

class Products extends React.Component {
  render() {
    const title = '제품상세';
    return (
      <div className="productsWrap">
        <article>
          <SubNav title={title} />
          <header>
            <img
              src="https://t1.daumcdn.net/friends/prod/product/20210308161640410_8809721507544_AW_02.jpg"
              alt="headImg"
            />
            <p className="headTitle">제품이름</p>
            <button className="headShareBtn">
              <FaShareAlt className="shareIcon" />
            </button>
            <p className="headPrice">제품가격</p>
            <div className="productGrade">
              <FaRegStar className="starIcon" />
              <FaRegStar className="starIcon" />
              <FaRegStar className="starIcon" />
              <FaRegStar className="starIcon" />
              <FaRegStar className="starIcon" />
              <p>(평점 올린 사람 수)</p>
            </div>
          </header>
          <div className="productInfor">설명</div>
          <button className="productDetail">
            <div className="detailBtn">
              <p>세부정보</p>
              <FaAngleDown className="downArrowIcon" />
            </div>
          </button>
          <button className="productDelivery">
            <div className="deliveryBtn">
              <p>
                배송
                <BsDot />
                반품
              </p>
              <FaAngleDown className="downArrowIcon" />
            </div>
          </button>
          <div className="productConsult">
            <div className="consultBox">
              <p>실시간 문의</p>
              <button className="consultBtn">
                <BsFillChatFill className="consultIcon" />
                상담하기
              </button>
            </div>
          </div>
          <div className="productReview">
            <div className="reviewCount">
              <p className="countTitle">리뷰 개수</p>
              <div className="productGrade">
                <FaRegStar className="starIcon" />
                <FaRegStar className="starIcon" />
                <FaRegStar className="starIcon" />
                <FaRegStar className="starIcon" />
                <FaRegStar className="starIcon" />
                <span>별점/5</span>
              </div>
            </div>
            <button className="reviewBtn">
              <BsPencil className="pencilIcon" />
              리뷰를 남겨주세요
            </button>
            <div className="productSort">
              <button className="sortLike">좋아요순</button>
              <button className="sortNew">최신순</button>
            </div>
            <div className="productComment">
              <p className="commentUser">유저네임</p>
              <div className="productUserGrade">
                <FaRegStar className="starIcon" />
                <FaRegStar className="starIcon" />
                <FaRegStar className="starIcon" />
                <FaRegStar className="starIcon" />
                <FaRegStar className="starIcon" />
                <span className="commentDate">올린 날짜</span>
              </div>
              <p className="commentValue">댓글내용</p>
              <div className="commentLike">
                <button>
                  <FaFreebsd className="likeBtnIcon" />
                  좋아요 2명
                </button>
              </div>
            </div>
          </div>
          <div className="productRecommend">
            <p className="recommendTitle">
              잠깐만,
              <br />이 상품은 어때요?
            </p>
            <div className="recommendProduct">
              <img
                src="https://t1.daumcdn.net/friends/prod/product/20210308161640410_8809721507544_AW_02.jpg"
                alt="productImg1"
              />
              <div className="nameBuyBox">
                <p className="recommendName">제품 이름</p>
                <FiShoppingBag className="shoppingIcon" />
              </div>
              <p className="recommendPrice">가격</p>
            </div>
          </div>
          <Footer />
          <div className="buyBtn">
            <div className="orderBox">
              <button className="orderBtn">바로구매</button>
            </div>
            <button className="basketBtn">
              <FiShoppingBag />
            </button>
          </div>
        </article>
      </div>
    );
  }
}

export default Products;
