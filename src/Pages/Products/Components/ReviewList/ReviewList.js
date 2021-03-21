import React from 'react';
import Review from '../Review/Review';
import './ReviewList.scss';

class ReviewList extends React.Component {
  render() {
    //console.log(this.props.productInfo);
    return (
      <div className="ReviewList">
        {this.props.productInfo.map(product => {
          return (
            <Review
              reviewer={product.reviewer}
              rating={product.rating}
              created_at={product.created_at}
              content={product.content}
              like_count={product.like_count}
            />
          );
        })}
      </div>
    );
  }
}

export default ReviewList;
