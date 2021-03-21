import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import './products.scss';

class Products extends React.Component {
  render() {
    const { data } = this.props;
    const dataAmount = data.map(data => data.product.length)[0];
    return (
      <section class="products">
        <div class="count">
          <span className="dataAmount">총 {dataAmount}개</span>
          <span>✔ 글로벌 배송 가능상품 보기</span>
        </div>
        <div class="productData">
          {data.map(data =>
            data.product.map(product => (
              <Link to={`/category/character/${product.id}`}>
                <div class="product" key={product.id}>
                  <img alt="catagoryimg" src={product.img} />
                  <div className="productName">
                    <span>{product.name}</span>
                    <button className="icon">
                      <FiShoppingBag />
                    </button>
                  </div>
                  <div className="productPrice">
                    {!product.discount ? (
                      <p className="noDiscount">
                        {product.price.toLocaleString()}원
                      </p>
                    ) : (
                      <div className="dicountPrice">
                        <span className="pink">{product.rate}%</span>
                        <span className="pink">
                          {product.discountPrice.toLocaleString()}원
                        </span>
                        <p className="rowPrice">
                          {product.price.toLocaleString()}원
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    );
  }
}

export default Products;
