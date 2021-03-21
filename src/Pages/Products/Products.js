import React from 'react';
import SubNav from '../../Components/SubNav';
import Footer from '../../Components/Footer';
import Slider from 'react-slick';
// import ReviewList from './Components/ReviewList/ReviewList';
import { FaRegStar, FaShareAlt, FaAngleDown } from 'react-icons/fa';
import { BsPencil, BsDot, BsFillChatFill } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';
import './Products.scss';
import './_slick-theme.scss';
import './_slick.scss';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
    };
  }

  buyModal = () => {};

  componentDidMount() {
    fetch('http://localhost:3001/data/ProductData.json', {
      methhod: 'GET',
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          productInfo: res,
        })
      );
  }

  render() {
    const title = '제품상세';
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    console.log(this.state.productInfo);
    console.log(this.state.productInfo.review_list);
    return (
      <div className="productsWrap">
        <article>
          <SubNav title={title} />
          <header>
            <Slider {...settings}>
              <img
                src="https://t1.daumcdn.net/friends/prod/product/20210308161640410_8809721507544_AW_02.jpg"
                alt="headImg"
              />
              <img
                src="https://t1.daumcdn.net/friends/prod/product/20210308161640410_8809721507544_AW_02.jpg"
                alt="headImg"
              />
            </Slider>
            <p className="headTitle">{this.state.productInfo.name}</p>
            <button className="headShareBtn">
              <FaShareAlt className="shareIcon" />
            </button>
            <p className="headPrice">{this.state.productInfo.price}원</p>
            <div className="productGrade">
              <FaRegStar className="starIcon" />
              <FaRegStar className="starIcon" />
              <FaRegStar className="starIcon" />
              <FaRegStar className="starIcon" />
              <FaRegStar className="starIcon" />
              <p>({this.state.productInfo.review_count})</p>
            </div>
          </header>
          <div className="productInfor">
            {this.state.productInfo.description}
          </div>
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
            {/* <ReviewList productInfo={this.state.productInfo.review_list} /> */}
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
              <button className="orderBtn" onClick={this.buyModal}>
                바로구매
              </button>
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
