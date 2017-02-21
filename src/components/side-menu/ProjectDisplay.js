import React, { Component } from 'react'
import { Sidebar, Menu, Icon, Segment, Header, Button } from 'semantic-ui-react'

class ProjectDisplay extends Component {
  render() {
    let pageInfo;
    if(this.props.location == '/') {
      pageInfo = this.props.pageInfo.earlystart;
    }
    else {
     pageInfo = this.props.pageInfo[this.props.location.slice(1)];
    }
    return (
      <Sidebar as={Segment}  direction='right' animation='slide along' width='very wide' visible={this.props.visible} icon='labeled' vertical>
        <div className="project-display">
          <center>
            <div className="project-top">
              <Header as='h2'>{pageInfo.name}</Header>
              <div><Button size="medium" basic><a href={pageInfo.link} target="_blank">Live Site</a></Button></div>
            </div>
            <br/>
            <br/>
            <div className="project-middle">
              <Header as='h5'>{pageInfo.spec}</Header>
            </div>
            <br/>
            <br/>
            <Header as='h3'>DEMO</Header>
            <img className="project-bottom" src={pageInfo.gif}/>
            <br/>
            <br/>
            <div><Button size="medium" basic onClick={this.props.changeVisible}>Close</Button></div>
          </center>
        </div>
      </Sidebar>
    )
  }
}

export default ProjectDisplay
