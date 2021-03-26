import React from 'react';
import { withRouter } from 'react-router';
import SubNav from '../../../Components/SubNav';
import Option from './Option/Option';
import Products from './Products/Products';
// import SubCategory from './SubCategory/SubCategory';
import Filter from './Filter/Filter';
import Footer from '../../../Components/Footer';
import './character.scss';

const IP = '54.180.24.190';
// const PATHNAME = `window.location.pathname === '/category/character'`;
const BROWSER_URL = '/category/character';
// window.location.pathname === '/category/character'
//   ? `/category/character`
//   : `/category/subject`;
const API_URL = `http://${IP}:8000/product${BROWSER_URL}`;
const SORTDATA = {
  신상품순: 'createDatetime,desc',
  '낮은 가격순': 'salePrice,asc',
  '높은 가격순': 'salePrice,desc',
};

const CHARACTER = {
  아몬드: 1,
  자이제: 2,
  준식: 3,
  죠르디: 4,
  칸: 5,
  타이거: 6,
  토끼: 7,
  팬다어덜트: 8,
  프라다: 9,
  피치피치: 10,
  고냥이: 11,
  꾀돌이: 12,
  단무지: 13,
  두부: 14,
};

// const SUBJECT = {
//   '테마 기획전': 1,
//   토이: 2,
//   리빙: 3,
//   잡화: 4,
//   문구: 5,
//   의류: 6,
//   파자마: 7,
//   '여행/레저': 8,
//   생활테크: 9,
//   '폰 액세서리': 10,
//   식품: 11,
// };

class Character extends React.Component {
  constructor() {
    super();
    this.state = {
      characterData: [],
      category: '전체',
      // subCategory: [],
    };
  }

  componentDidMount() {
    const query = 'sort=createDatetime,desc';
    this.dataRender(query);
  }

  componentDidUpdate(prevProps, _) {
    if (prevProps.location !== this.props.location) {
      this.dataRender(this.props.location.search.slice(1));
    }
  }

  dataRender(query) {
    fetch(`${API_URL}?${query}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          characterData: res.result.product,
        })
      );
    // !res.result.sub_categories
    //   ? this.setState({
    //       characterData: res.result.product,
    //     })
    //   : this.setState({
    //       characterData: res.result.product,
    //       subCategory: res.result.sub_categories,
    //     })
  }

  changeCategory = e => {
    this.setState({
      category: e.target.value,
    });
    e.target.value === '전체'
      ? this.goToCategoryMain()
      : this.goToCategorySeq(e);
  };

  goToCategoryMain() {
    const query = 'sort=createDatetime,desc';
    this.props.history.push(`${BROWSER_URL}?${query}`);
    this.dataRender(query);
  }

  goToCategorySeq(e) {
    const characterId = CHARACTER[e.target.value];
    // const subjectId = SUBJECT[e.target.value];
    const categoryId = characterId; /*PATHNAME ? characterId : subjectId;*/
    const query = `characterSeq=${categoryId}&sort=createDatetime,desc`;
    // PATHNAME
    //   ? `characterSeq=${categoryId}&sort=createDatetime,desc`
    //   : `subCategorySeq=${categoryId}&sort=createDatetime,desc`;
    this.props.history.push(`${BROWSER_URL}?${query}`);
    this.dataRender(query);
  }

  // goToSubCategory(e) {
  //   const subCategoryId = e.target.dataset.idx;
  //   const subCategoryName = e.target.dataset.value;
  //   const query =
  //     subCategoryName === '전체'
  //       ? '&sort=createDatetime,desc'
  //       : `subCategorySeq=${subCategoryId}&sort=createDatetime,desc`;
  //   this.props.history.push(`${BROWSER_URL}?${query}`);
  // }

  sortingSequence = e => {
    const characterId = CHARACTER[this.state.category];
    const sortId = SORTDATA[e.target.value];
    let query;
    this.state.category === '전체'
      ? (query = `sort=${sortId}`)
      : (query = `characterSeq=${characterId}&sort=${sortId}`);
    this.props.history.push(`${BROWSER_URL}?${query}`);
    this.dataRender(query);
  };

  // sortingCharacter = e => {
  //   const characterId = CHARACTER[e.target.value];
  //   const sortId = SORTDATA[e.target.value];
  //   let query;
  //   e.target.value === '캐릭터 전체'
  //     ? (query = `sort=${sortId}`)
  //     : (query = `&characterSeq=${characterId}&sort=${sortId}`);
  //   this.props.history.push(`${BROWSER_URL}?${query}`);
  //   this.dataRender(query);
  // };

  render() {
    const { category, characterData } = this.state;
    const {
      sortingSequence,
      sortingCharacter,
      changeCategory,
      // goToSubCategory,
    } = this;
    return (
      <>
        <SubNav title={'캐릭터'} />
        <main className="character">
          <Option changeCategory={changeCategory} category={category} />
          {/* {!subCategory && (
            <SubCategory
              subCategory={subCategory}
              goToSubCategory={goToSubCategory}
            />
          )} */}
          <Filter
            sortingSequence={sortingSequence}
            sortingCharacter={sortingCharacter}
          />
          <Products data={characterData} />
        </main>
        <Footer />
      </>
    );
  }
}

export default withRouter(Character);
