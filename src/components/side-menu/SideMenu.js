import React, { Component } from 'react'
import { Sidebar, Menu, Icon, Header, Segment, List, Image } from 'semantic-ui-react'
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
                      <Link to='earlystart'><List.Header>Early Start</List.Header></Link>
                    </List.Content>
                  </List.Item>
                  <br/>
                  <List.Item>
                    <List.Icon name='file' />
                    <List.Content>
                      <List.Header>Game Dash</List.Header>
                    </List.Content>
                  </List.Item>
                  <br/>
                  <List.Item>
                    <List.Icon name='file' />
                    <List.Content>
                      <List.Header>Game Dash</List.Header>
                    </List.Content>
                  </List.Item>
                  <br/>
                  <List.Item>
                    <List.Icon name='file' />
                    <List.Content>
                      <List.Header>Game Dash</List.Header>
                    </List.Content>
                  </List.Item>
                  <br/>
                  <List.Item>
                    <List.Icon name='file' />
                    <List.Content>
                      <List.Header>Game Dash</List.Header>
                    </List.Content>
                  </List.Item>
                  <br/>
                  <List.Item>
                    <List.Icon name='file' />
                    <List.Content>
                      <List.Header>Game Dash</List.Header>
                    </List.Content>
                  </List.Item>
                </List.List>
              </List.Content>
            </List.Item>
          </List>
          <br/>
          <br/>
          <br/>
            <Header as='h2'>
              <Image shape='circular' src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAmZAAAAJDk5YjA2Njc1LWYxYzEtNDQwYi04YTM2LTc3OGQ3MDYzOGFkMg.jpg' />
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
        </center>
      </Sidebar>
    )
  }
}

export default SideMenu
