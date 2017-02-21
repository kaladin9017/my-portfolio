import React, { Component } from 'react';
import './App.css';

import SideMenu from './components/side-menu/SideMenu';
import ProjectDisplay from './components/side-menu/ProjectDisplay';

import { changeLeftVisible, changeRightVisible } from './components/redux/actions/index';

import { Sidebar, Segment, Icon } from 'semantic-ui-react'

import { connect } from 'react-redux';

  class App extends Component {

    render() {
      return (
        <div className="main-container">
          <Sidebar.Pushable as={Segment}>
            <SideMenu visible={this.props.state.state.leftVisible} />
            <ProjectDisplay changeVisible={this.props.changeRightVisible} location={this.props.location.pathname} pageInfo={this.props.state.pageInfo} visible={this.props.state.state.rightVisible} />
            <Sidebar.Pusher>
                {this.props.children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      );
    }
}
function mapStateToProps(state) {
  return {
    state
  }
}
export default connect(mapStateToProps, { changeRightVisible, changeLeftVisible })(App);
