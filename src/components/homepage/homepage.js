import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { changeLeftVisible, changeRightVisible } from '../redux/actions/index';

class HomePage extends Component {

  toggleLeftVisibility = () => {this.props.changeLeftVisible()}
  toggleRightVisibility = () => {this.props.changeRightVisible()}
  render() {
    return(
      <div className="main-display">

        <div className="left-display">

          <div className="middle-left">
            <h2>Christopher Sancho</h2>
            <h5>Web Developer</h5>
          </div>
          <div className="middle-right">
            <h4>Project Name</h4>
            <h1>Early Start</h1>
            <div>gfutdhcgfjhcj</div>
            <div>gfutdhcgfjhcj</div>
            <div>gfutdhcgfjhcj</div>
            <div>gfutdhcgfjhcj</div>
            <Icon name="indent" size="big" onClick={this.toggleLeftVisibility.bind(this)}/>
            <Icon name="outdent" size="big" onClick={this.toggleRightVisibility.bind(this)}/>
          </div>

        </div>

        <div className="right-display">
          <img className="img-display" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/1514010_10207781003381942_7489253566262447280_n.jpg?oh=2e92ecb848ac5b242d1e30064e5b822c&oe=594A8CBF" />
        </div>

      </div>
    )
  }
}

export default connect(null, {changeLeftVisible, changeRightVisible})(HomePage);
