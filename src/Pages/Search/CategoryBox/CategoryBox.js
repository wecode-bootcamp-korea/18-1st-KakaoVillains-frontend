import React from "react";
import "./categoryBox.scss";

class CategoryBox extends React.Component {
  render() {
    return (
      <section className="category">
        <h4>카테고리</h4>
        <ul>
          {CATEGORY.map(data => (
            <button
              id={data.id}
              key={data.id}
              onClick={this.props.goToCategory}
            >
              {data.name}
            </button>
          ))}
        </ul>
      </section>
    );
  }
}

export default CategoryBox;

const CATEGORY = [
  { id: 1, name: "전체" },
  { id: 2, name: "테마 기획전" },
  { id: 3, name: "토이" },
  { id: 4, name: "리빙" },
  { id: 5, name: "잡화" },
  { id: 6, name: "문구" },
  { id: 7, name: "의류" },
  { id: 8, name: "파자마" },
  { id: 9, name: "여행/레저" },
  { id: 10, name: "생활테크" },
  { id: 11, name: "폰 액세서리" },
  { id: 12, name: "식품" },
];
