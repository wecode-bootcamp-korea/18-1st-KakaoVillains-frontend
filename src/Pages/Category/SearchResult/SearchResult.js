// import React from 'react';
// import { withRouter } from 'react-router';
// import SubNav from '../../../Components/SubNav';
// import Products from '../Character/Products/Products';
// import Filter from '../Character/Filter/Filter';
// import Footer from '../../../Components/Footer';
// import '../SearchResult/searchResult.scss';

// const IP = '54.180.24.190';
// const SORTDATA = {
//   신상품순: 'createDatetime,desc',
//   '낮은 가격순': 'salePrice,asc',
//   '높은 가격순': 'salePrice,desc',
// };

// class SearchResult extends React.component {
//   constructor() {
//     super();
//     this.state = {
//       dataList: [],
//     };
//   }
//   componentDidmount() {
//     const KEYWORD = decodeURI.window.location.pathname.split('=')[1];
//     fetch(`${IP}:8000/product/search?keyword=${KEYWORD}&sort=NEW`)
//       .then(res => res.json())
//       .then(res =>
//         this.setState({
//           dataList: res.result,
//         })
//       );
//   }
//   sortingSequence = e => {
//     const sortId = SORTDATA[e.target.value];
//     const KEYWORD = decodeURI.window.location.pathname.split('=')[1];
//     this.props.history.push(`product/search?keyword=${KEYWORD}?sort=${sortId}`);
//     fetch(`${IP}:8000/product/search?keyword=${KEYWORD}&sort=${sortId}`)
//       .then(res => res.json())
//       .then(res =>
//         this.setState({
//           dataList: res.result,
//         })
//       );
//   };
//   render() {
//     const KEYWORD = decodeURI.window.location.pathname.split('=')[1];
//     return (
//       <>
//         <SubNav title="검색결과" />
//         <div className="searchResult">
//           <div>'{KEYWORD}' 검색결과</div>
//           this.state.dataList.length ? (
//           <Filter sortingSequence={this.sortingSequence} />
//           <Products data={this.dataList} />) : (
//           <div className="noResult">검색결과가 없습니다.</div>)
//         </div>
//         <Footer />
//       </>
//     );
//   }
// }
// export default withRouter(SearchResult);
