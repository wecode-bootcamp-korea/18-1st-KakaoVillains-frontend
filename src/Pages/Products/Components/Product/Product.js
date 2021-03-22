import React from 'react';
import Rating from '../Rating/Rating';
import {
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
} from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
import Slider from 'react-slick';
import './Product.scss';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  openModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    const Modal = this.state.showModal ? (
      <div className="snsBtn">
        <button className="snsIcon">
          <FaFacebookF />
        </button>
        <button className="snsIcon">
          <FaTwitter />
        </button>
        <button className="snsIcon">
          <FaGithubAlt />
        </button>
        <button className="snsIcon">
          <RiKakaoTalkFill />
        </button>
      </div>
    ) : null;

    return (
      <div>
        <header>
          <Slider {...settings}>
            {this.props.image_list.map(imgList => {
              return <img src={imgList} alt="이미지" />;
            })}
          </Slider>
          <p className="headTitle">{this.props.name}</p>
          <div className="modalBox">
            <div className="snsModal">{Modal}</div>
            <button className="headShareBtn" onClick={this.openModal}>
              <FaShareAlt className="shareIcon" />
            </button>
          </div>
          <p className="headPrice">{this.props.price}원</p>
          <div className="productGrade">
            <Rating value={this.props.average_rating} />
            <p>({this.props.review_count})</p>
          </div>
        </header>
        <div className="productInfor">{this.props.description}</div>
      </div>
    );
  }
}

export default Product;
