import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';

class Relative extends React.Component {
  render() {
    return (
      <>
        <div className="productRecommend">
          <p className="recommendTitle">
            잠깐만,
            <br />이 상품은 어때요?
          </p>
        </div>
        <div className="gridBox">
          {this.props.related_products.map((product, idx) => (
            <div className="recommendProduct" key={idx}>
              <img src={product.image_url} alt="productImg1" />
              <div className="nameBuyBox">
                <p className="recommendName">{product.name}</p>
                <FiShoppingBag className="shoppingIcon" />
              </div>
              <p className="recommendPrice">
                {product.price.toLocaleString()}원
              </p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Relative;
