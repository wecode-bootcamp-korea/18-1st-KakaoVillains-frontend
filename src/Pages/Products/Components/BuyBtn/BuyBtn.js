import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import './BuyBtn.scss';

class BuyBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      buyModal: false,
    };
  }

  openBuyModal = () => {
    this.setState({
      buyModal: !this.state.buyModal,
    });
  };

  selectNum = () => {
    let numArr = [];
    for (let num = 1; num <= 99; num++) {
      numArr.push(num);
    }
    return numArr;
  };

  render() {
    const numValue = this.selectNum();

    const buyModal = this.state.buyModal && (
      <div className="checkProduct">
        <select>
          {numValue.map((num, index) => {
            return (
              <option key={index} value="num">
                {num}
              </option>
            );
          })}
        </select>
        <p>{this.props.price.toLocaleString()}원</p>
      </div>
    );

    return (
      <div className="buyBox">
        {buyModal}
        <div className="buyBtn">
          <button className="orderBtn" onClick={this.openBuyModal}>
            바로구매
          </button>
          <button className="basketBtn" onClick={this.openBuyModal}>
            <FiShoppingBag />
          </button>
        </div>
      </div>
    );
  }
}

export default BuyBtn;
