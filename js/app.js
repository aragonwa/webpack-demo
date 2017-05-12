require('../css/bootstrap.css');
require('../css/app.scss');
// var img = document.createElement('img');
// img.style.height = "25%";
// img.style.width = "25%";
// img.src = require('../images/cat.jpg');
// document.getElementById('img_container').appendChild(img);
// console.log('App Loaded');

import React from 'react';
import ReactDOM from 'react-dom';
class Timer extends React.Component{
  constructor() {
    super();
    this.state = {
      secondsElapsed: 0
    }
    this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState({secondsElapsed: this.state.secondsElapsed +1});
  }
  componentDidMount(){
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  render(){
    // JSX in here gets parsed with the babel loader
    return(
      <div>
        <h3>It's the final countdown</h3>
        Second Elapsed: {this.state.secondsElapsed}
      </div>
    );
  }
};

ReactDOM.render(<Timer />, document.getElementById('container'));

require('./login');