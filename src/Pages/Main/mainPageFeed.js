/* eslint-disable prettier/prettier */
import React from "react";
import FeedList from "./FeedList";
// import Feed from "./Feed";
import InfiniteScroll from "react-infinite-scroll-component";
import { BsThreeDotsVertical } from "react-icons/bs";
class MainPageFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
      page: 0,
    };
  }

  componentDidMount() {
    this.nextData();
  }

  // componentDidUpdate(prevProps) {
  //   this.colorChangeBtn();
  //   if (this.props.like_count !== prevProps.like_count) {
  //     this.setState({
  //       feedList: this.state.feedList.concat(this.props.like_count),
  //     });
  //   }
  // }
  // nextData = () => {
  //   fetch(`/data/data${this.state.page}.json`, {
  //     method: "GET",
  //   })
  //     .then(res => res.json())
  //     .then(data =>
  //       this.setState({
  //         feedList: this.state.feedList.concat(data),
  //         page: this.state.page + 1,
  //       })
  //     );
  // };

  nextData = () => {
    fetch(`http://10.58.0.65:8000/feed?page=${this.state.page}`, {
      method: "GET",
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          feedList: this.state.feedList.concat(data.result),
          page: this.state.page + 1,
        })
      );
  };

  colorChangeBtn = async index => {
    await fetch(
      `http://10.58.0.65:8000/feed/like/${this.state.feedList?.[index]?.id}`,
      {
        method: "POST",
        headers: {
          Authorization: token,
        },
      }
    )
      .then(res => res.json())
      .then(data => this.setState);
  };

  render() {
    return (
      <>
        {this.state.feedList.length > 0 && (
          <InfiniteScroll
            dataLength={this.state.feedList.length}
            next={this.nextData}
            hasMore={true}
          >
            {this.state.feedList.map((list, index) => {
              return (
                <FeedList
                  key={list.id}
                  id={list.id}
                  profile_picture={list.profile_picture}
                  username={list.username}
                  datetime={list.datetime}
                  like_count={list.like_count}
                  title={list.title}
                  content={list.content}
                  reply_count={list.reply_count}
                  reply_username={list.reply_username}
                  reply={list.reply}
                  image_url={list.image_url}
                  recommend_products={list.recommend_products}
                  heart={list.heart}
                  colorChangeBtn={this.colorChangeBtn(index)}
                />
              );
            })}
          </InfiniteScroll>
        )}
      </>
    );
  }
}

export default MainPageFeed;

let token = sessionStorage.getItem("userid") || "";
