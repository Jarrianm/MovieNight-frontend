import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

class ViewedProfleCard extends Component {
    render() {
        console.log(this.props)
        return (
            <Card>
            <Image src={this.props.user.profile_img} />
            <Card.Content>
              <Card.Header>{this.props.user.name}</Card.Header>
              <Card.Description>{this.props.user.bio}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='film' />
                10 Movies
              </a>
            </Card.Content>
          </Card>
        );
    }
}

export default ViewedProfleCard;