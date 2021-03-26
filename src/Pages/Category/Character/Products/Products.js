import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import './products.scss';

class Products extends React.Component {
  render() {
    const { data } = this.props;
    const dataAmount = data.length;
    return (
      <section class="products">
        <div class="count">
          <span className="dataAmount">총 {dataAmount}개</span>
          <span>✔ 글로벌 배송 가능상품 보기</span>
        </div>
        <div class="productData">
          {data.map(data => (
            <Link to={`/product/${data.product_id}`} key={data.product_id}>
              <div class="product">
                <img alt="catagoryimg" src={data.image_url} />
                <div className="productName">
                  <span>{data.name}</span>
                  <button className="icon">
                    <FiShoppingBag />
                  </button>
                </div>
                <div className="productPrice">
                  {data.discount_rate > 0 ? (
                    <div className="dicountPrice">
                      <span className="pink">
                        {Number(data.discount_rate)}%
                      </span>
                      <span className="pink">
                        {(
                          (data.price * (100 - data.discount_rate)) /
                          100
                        ).toLocaleString()}
                        원
                      </span>
                      <p className="rowPrice">
                        {data.price.toLocaleString()}원
                      </p>
                    </div>
                  ) : (
                    <p className="noDiscount">
                      {data.price.toLocaleString()}원
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }
}

export default Products;
