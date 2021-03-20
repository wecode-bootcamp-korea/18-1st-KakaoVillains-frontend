/* eslint-disable prettier/prettier */
import React from 'react';
import FeedList from './FeedList'
import './mainPageFeed.scss';

class MainPageFeed extends React.Component {

  constructor(){
    super();
    this.state = {
      feedList: [],
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/data/data.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => this.setState({
      feedList: data,
    }))

  }

  render() {
    console.log(this.state.feedList)
    return (
      <>
      {this.state.feedList.length > 0 && <>
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
          )
        })}
      </>
      }
      </>
    );
  }
}

export default MainPageFeed;
