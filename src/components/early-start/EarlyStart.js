import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { changeLeftVisible, changeRightVisible } from '../redux/actions/index';

class EarlyStart extends Component {

  toggleLeftVisibility = () => {this.props.changeLeftVisible()}
  toggleRightVisibility = () => {this.props.changeRightVisible()}
  render() {
    return(
      <div className="main-display">
        <div className="left-display">
          <div className="indent"><Icon name="indent" size="big" onClick={this.toggleLeftVisibility.bind(this)}/></div>
          <div className="middle-left">
            <h2>Christopher Sancho</h2>
            <h5>Web Developer</h5>
          </div>
          <div className="middle-right">
            <h4>Project Name</h4>
            <h1>{this.props.pageInfo.earlystart.name}</h1>
            <div><p>{this.props.pageInfo.earlystart.description}</p></div>
            <Header as='h4' className='more-info' onClick={this.toggleRightVisibility.bind(this)}>More Info</Header>

          </div>

        </div>

        <div className="right-display">
          <img className="img-display" src={this.props.pageInfo.earlystart.image} />
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    pageInfo: state.pageInfo
  }
}
export default connect(mapStateToProps, {changeLeftVisible, changeRightVisible})(EarlyStart);
