import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { changeLeftVisible, changeRightVisible } from '../redux/actions/index';

class QueensList extends Component {

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
            <center>
              <h1>{this.props.pageInfo.queenslist.name}</h1>
            </center>
          </div>

        </div>

        <div className="right-display">
          <div className="right-right">
            <div><p>{this.props.pageInfo.queenslist.description}</p></div>
            <br/>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent:'center'
            }}
              >
              <Button onClick={this.toggleRightVisibility.bind(this)} size="medium" basic>Demo
                <Icon style={{
                alignItems: 'center',
                justifyContent:'center',
                paddingRight: '8px'
              }}name="long arrow right" size="large">

              </Icon>
              </Button>
            </div>
          </div>
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
export default connect(mapStateToProps, {changeLeftVisible, changeRightVisible})(QueensList);
