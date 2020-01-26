import React, { Component } from 'react';
import axios from 'axios';
import './Album.css';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      count: 10
    }
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/photos"
    axios.get(url)
    .then((res) => {
      console.log('res', res);
      this.setState({ images: res.data});
    })
    .catch((err) => {
      console.log('err', err);
    })

    window.onscroll = (ev) => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.setState({ count: this.state.count + 10 });
      }
    };
  }
  render() {
      return (
          <div className="container">
            <div className="header">
              Album
            </div>
            <div className="items">
              {this.state.images.filter((i, index) => index < this.state.count).map((item, i )=> {
                return (
                  <div className="itemDisplay">
                    <div>
                      <img className="img" src={item.url} />
                    </div>
                    <div className="title">
                      {item.title}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        );
    }
}

export default Album;
