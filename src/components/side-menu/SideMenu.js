import React, { Component } from 'react'
import { Sidebar, Icon, Header, Segment, List, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router';


class SideMenu extends Component {
  render() {
    return (
      <Sidebar as={Segment} animation='slide along' width='very wide' visible={this.props.visible} icon='labeled' vertical>
        <center>
          <List>
            <List.Item as='h3'>
              <List.Icon name='folder' />
              <List.Content>
                <List.Header>Projects</List.Header>
                <List.List>
                  <List.Item>
                    <List.Icon name='file' />
                    <List.Content>
                      <Link to='earlystart' onClick={this.props.changeVisible}><List.Header>Early Start</List.Header></Link>
                    </List.Content>
                  </List.Item>
                  <br/>
                  <List.Item>
                    <List.Icon name='file' />
                    <List.Content>
                      <Link to='fantasybookalley' onClick={this.props.changeVisible}><List.Header>Fantasy Book Alley</List.Header></Link>
                    </List.Content>
                  </List.Item>
                  <br/>
                  <List.Item>
                    <List.Icon name='file' />
                    <List.Content>
                      <Link to='gamedash' onClick={this.props.changeVisible}><List.Header>Game Dash</List.Header></Link>
                    </List.Content>
                  </List.Item>
                  <br/>
                  <List.Item>
                    <List.Icon name='file' />
                    <List.Content>
                      <Link to='breathe' onClick={this.props.changeVisible}><List.Header>Breathe</List.Header></Link>
                    </List.Content>
                  </List.Item>
                  <br/>
                </List.List>
              </List.Content>
            </List.Item>
          </List>
          <br/>
          <br/>
          <br/>
            <Header as='h2'>
              <Image shape='circular' src='http://i.imgur.com/eilHkwY.png?1' />
              {' '}About Me
            </Header>
            <p>
              I'm a software developer in New York City.
              I'm passionate about bringing inspired designs and products to life,
               and I also enjoy building developer tools and contributing to the open-source community.
            </p>
          <br/>
          <br/>
          <br/>
          <List horizontal size='big'>
            <List.Item>
              <a href="https://twitter.com/sanchoc15">
              <Icon name='twitter' link />
              </a>
            </List.Item>
            <List.Item>
              <a href="https://www.linkedin.com/in/christopher-sancho">
              <Icon name='linkedin' link />
              </a>
            </List.Item>
            <List.Item>
              <a href="https://www.github.com/kaladin9017">
              <Icon name='github alternate' link />
              </a>
            </List.Item>
          </List>
          <div>
            <Button onClick={this.props.changeVisible}size="medium" basic>Close</Button>
          </div>
        </center>
      </Sidebar>
    )
  }
}

export default SideMenu
