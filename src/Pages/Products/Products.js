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
      productInfo: {},
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

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(`http://54.180.24.190:8000/product/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(res => this.setState({ productInfo: res.result }));
    }
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    fetch(`http://54.180.24.190:8000/product/${this.props.match.params.id}`, {
      methhod: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          productInfo: res.result,
        });
      });
  }

  render() {
    const title = '제품상세';

    const { productInfo } = this.state;

    return (
      <div className="productsWrap">
        <article>
          <SubNav title={title} />
          <Product
            name={productInfo.name}
            price={productInfo.price}
            average_rating={productInfo.average_rating}
            description={productInfo.description}
            review_count={productInfo.review_count}
            image_list={productInfo.image_list}
          />
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
          <ReviewList
            average_rating={productInfo.average_rating}
            review_count={productInfo.review_count}
            review_list={productInfo.review_list}
          />
          <Relative related_products={productInfo.related_products} />
          <Footer />
        </article>
        <BuyBtn price={productInfo.price} />
      </div>
    );
  }
}

export default Products;
