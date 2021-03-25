import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';

class BuyBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      buyModal: false,
      select: '',
    };
  }

  openBuyModal = () => {
    this.setState({
      buyModal: !this.state.buyModal,
    });
  };

  selectNum = () => {
    let numArr = [];
    for (let num = 0; num <= 99; num++) {
      numArr.push(num);
    }
    return numArr;
  };

  selectValue = e => {
    const { value } = e.target;
    this.setState({
      select: value,
    });
  };

  render() {
    const numValue = this.selectNum();

    const multiply = Number(this.state.select) * this.props.price;

    const buyModal = this.state.buyModal && (
      <div className="checkProduct">
        <select onChange={this.selectValue}>
          {numValue.map((num, index) => {
            return (
              <option key={index} value={num}>
                {num}
              </option>
            );
          })}
        </select>
        <p>{multiply.toLocaleString()}원</p>
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
