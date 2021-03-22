import React from 'react';
import Rating from '../Rating/Rating';
import { FaFreebsd } from 'react-icons/fa';

class ReviewList extends React.Component {
  render() {
    return (
      <div>
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
