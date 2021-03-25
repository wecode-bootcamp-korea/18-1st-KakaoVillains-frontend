import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import './products.scss';

class Products extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <section class="products">
        <div class="count">
          <span>총 {}개</span>
          <span>✔ 글로벌 배송 가능상품 보기</span>
        </div>
        <div class="productData">
          {data.map(product => (
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
                  <p>{product.price /*.toLocaleString()*/}원</p>
                ) : (
                  <div className="dicountPrice">
                    <span className="pink">
                      {product.rate /*.toLocaleString()*/}%
                    </span>
                    <span className="pink">
                      {product.discountPrice /*.toLocaleString()*/}원
                    </span>
                    <p className="rowPrice">
                      {product.price /*.toLocaleString()*/}원
                    </p>
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
