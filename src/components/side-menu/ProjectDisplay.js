import React, { Component } from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

class ProjectDisplay extends Component {
  render() {
    return (
      <Sidebar as={Menu} className="project-display" direction='right' animation='slide along' width='very very wide' visible={this.props.visible} icon='labeled' vertical>
        <Menu.Item name='home'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item name='gamepad'>
          <Icon name='gamepad' />
          Games
        </Menu.Item>
        <Menu.Item name='camera'>
          <Icon name='camera' />
          Channels
        </Menu.Item>
      </Sidebar>
    )
  }
}

export default ProjectDisplay
