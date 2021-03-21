/* eslint-disable prettier/prettier */
import React from 'react';
import FeedList from './FeedList';
import InfiniteScroll from 'react-infinite-scroll-component';
import './mainPageFeed.scss';

class MainPageFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
      page: 1,
    };
  }

  componentDidMount() {
    this.nextData();
  }

  nextData = () => {
    fetch(`http://localhost:3000/data/data${this.state.page}.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          feedList: this.state.feedList.concat(data),
          page: this.state.page + 1,
        })
      );
  };

  render() {
    return (
      <>
        {this.state.feedList.length > 0 && (
          <>
            <InfiniteScroll
              dataLength={this.state.feedList.length}
              next={this.nextData}
              hasMore={true}
            >
              {this.state.feedList.map(list => {
                return (
                  <FeedList
                    key={list.id}
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
                  />
                );
              })}
            </InfiniteScroll>
          </>
        )}
      </>
    );
  }
}

export default MainPageFeed;
