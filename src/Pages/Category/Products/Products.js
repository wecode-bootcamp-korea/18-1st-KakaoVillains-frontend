import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import './produts.scss';

class Products extends React.Component {
  render() {
    return (
      <section class="products">
        <div class="count">
          <span>총 67개</span> <span>✔ 글로벌 배송 가능상품 보기</span>
        </div>
        <div class="productData">
          {this.props.characterData.map(data => (
            <div class="product" key={data.id}>
              <img alt="catagoryimg" src={data.productImg} />
              <div className="productName">
                <span>{data.productName}</span>
                <button className="icon">
                  <FiShoppingBag />
                </button>
              </div>
              <div className="productPrice">
                {!data.discount ? (
                  <p>{data.price}원</p>
                ) : (
                  <div className="dicountPrice">
                    <span className="pink">{data.rate}%</span>
                    <span className="pink">{data.discountPrice}원</span>
                    <p className="rowPrice">{data.price}원</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Products;
