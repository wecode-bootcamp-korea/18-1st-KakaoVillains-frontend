import React from 'react';
import Rating from '../Rating/Rating';
import { FaShareAlt } from 'react-icons/fa';
import Slider from 'react-slick';

class Product extends React.Component {
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

    return (
      <div>
        <header>
          <Slider {...settings}>
            {this.props.image_list.map(imgList => {
              return <img src={imgList} alt="이미지" />;
            })}
          </Slider>
          <p className="headTitle">{this.props.name}</p>
          <button className="headShareBtn">
            <FaShareAlt className="shareIcon" />
          </button>
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
