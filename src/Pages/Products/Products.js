import React from 'react';
import SubNav from '../../Components/SubNav';
import Footer from '../../Components/Footer';
import Product from './Components/Product/Product';
import ReviewList from './Components/ReviewList/ReviewList';
import Relative from './Components/Relative/Relative';
import BuyBtn from './Components/BuyBtn/BuyBtn';
import { FaAngleDown } from 'react-icons/fa';
import { BsDot, BsFillChatFill } from 'react-icons/bs';
import './Products.scss';
import './_slick-theme.scss';
import './_slick.scss';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
      detailModal: false,
      deliveryModal: false,
    };
  }

  openDetailModal = () => {
    this.setState({
      detailModal: !this.state.detailModal,
    });
  };

  openDeliveryModal = () => {
    this.setState({
      deliveryModal: !this.state.deliveryModal,
    });
  };

  componentDidMount() {
    fetch('/data/ProductData.json', {
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

    const productInfo = this.state.productInfo;

    return (
      <div className="productsWrap">
        <article>
          <SubNav title={title} />
          {productInfo.map(info => {
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
          <div className="productDetailBox">
            <button className="productDetail">
              <div className="detailBtn" onClick={this.openDetailModal}>
                <p>세부정보</p>
                <FaAngleDown className="downArrowIcon" />
              </div>
            </button>
            {this.state.detailModal && (
              <div className="detailInfo">
                <img src="/images/masimaro.jpg" alt="easter egg" />
              </div>
            )}
          </div>
          <div className="productDeliveryBox">
            <button className="productDelivery">
              <div className="deliveryBtn" onClick={this.openDeliveryModal}>
                <p>
                  배송
                  <BsDot />
                  반품
                </p>
                <FaAngleDown className="downArrowIcon" />
              </div>
            </button>
            {this.state.deliveryModal && (
              <div className="deliveryInfo">
                <img src="/images/delivery.jpg" alt="easter egg" />
              </div>
            )}
          </div>
          <div className="productConsult">
            <div className="consultBox">
              <p>실시간 문의</p>
              <button className="consultBtn">
                <BsFillChatFill className="consultIcon" />
                상담하기
              </button>
            </div>
          </div>
          {productInfo.map(info => {
            return (
              <ReviewList
                average_rating={info.average_rating}
                review_count={info.review_count}
                review_list={info.review_list}
              />
            );
          })}
          {productInfo.map(info => {
            return <Relative related_products={info.related_products} />;
          })}
          <Footer />
        </article>
        {productInfo.map(info => {
          return <BuyBtn price={info.price} />;
        })}
      </div>
    );
  }
}

export default Products;
