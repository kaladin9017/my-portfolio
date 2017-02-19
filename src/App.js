import React, { Component } from 'react';
import './App.css';

import SideMenu from './components/side-menu/SideMenu';
import ProjectDisplay from './components/side-menu/ProjectDisplay';

import { Sidebar, Segment, Icon } from 'semantic-ui-react'


  class App extends Component {
    state = { leftVisible: false, rightVisible: false }
    toggleLeftVisibility = () => this.setState({ leftVisible: !this.state.leftVisible })
    toggleRightVisibility = () => this.setState({ rightVisible: !this.state.rightVisible })

    render() {
      const { leftVisible, rightVisible } = this.state
      // const { rightVisible } = this.state

      return (
        <div className="main-container">
          <Icon name="indent" size="big" onClick={this.toggleLeftVisibility}/>
          <Icon name="outdent" size="big" onClick={this.toggleRightVisibility}/>
          <Sidebar.Pushable as={Segment}>
            <SideMenu visible={leftVisible} />
            <ProjectDisplay visible={rightVisible} />
            <Sidebar.Pusher>
                {this.props.children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      );
    }
}

export default App;
