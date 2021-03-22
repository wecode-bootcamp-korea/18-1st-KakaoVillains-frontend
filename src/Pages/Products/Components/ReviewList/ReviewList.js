import React from 'react';
import Rating from '../Rating/Rating';
import { FaFreebsd } from 'react-icons/fa';
import { BsPencil } from 'react-icons/bs';

class ReviewList extends React.Component {
  render() {
    return (
      <div className="productReview">
        <div className="reviewCount">
          <p className="countTitle">리뷰 {this.props.review_count}개</p>
          <div className="productGrade">
            <Rating value={this.props.average_rating} />
            <p>{this.props.average_rating}/5</p>
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
        {this.props.review_list.map(product => (
          <div className="productComment">
            <p className="commentUser">{product.reviewer}</p>
            <div className="productUserGrade">
              <Rating value={product.rating} />
              <span className="commentDate">{product.created_at}</span>
            </div>
            <p className="commentValue">{product.content}</p>
            <div className="commentLike">
              <button>
                <FaFreebsd className="likeBtnIcon" />
                좋아요 {product.like_count}명
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ReviewList;
