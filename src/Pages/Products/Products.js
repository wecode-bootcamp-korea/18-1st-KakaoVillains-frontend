import React from 'react';
import SubNav from '../../Components/SubNav';
import Footer from '../../Components/Footer';
import Product from './Components/Product/Product';
import ReviewList from './Components/ReviewList/ReviewList';
import Rating from './Components/Rating/Rating';
import { FaAngleDown } from 'react-icons/fa';
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

  componentDidMount() {
    fetch('http://localhost:3000/data/ProductData.json', {
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
    console.log(this.state.productInfo);
    return (
      <div className="productsWrap">
        <article>
          <SubNav title={title} />
          {this.state.productInfo.map(info => {
            return (
              <Product
                name={info.name}
                price={info.price}
                average_rating={info.average_rating}
                description={info.description}
                review_count={info.review_count}
                image_list={info.image_list}
              />
            );
          })}
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
              <p className="countTitle">리뷰개수</p>
              <div className="productGrade">
                {this.state.productInfo.map(info => {
                  return <Rating value={info.average_rating} />;
                })}
                <p>별점/5</p>
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
            {this.state.productInfo.map(info => {
              return <ReviewList review_list={info.review_list} />;
            })}
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
