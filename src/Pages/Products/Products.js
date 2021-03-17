import React from 'react';
import SubNav from '../../Components/SubNav';
import Footer from '../../Components/Footer';
import '../../Styles/reset.scss';
import '../../Styles/common.scss';
import './Products.scss';

class Products extends React.Component {
  render() {
    return (
      <div className="productsWrap">
        <article>
          <SubNav></SubNav>
          <div className="fuck"></div>
          <Footer></Footer>
        </article>
      </div>
    );
  }
}

export default Products;
