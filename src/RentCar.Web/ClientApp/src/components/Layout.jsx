import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Header } from './header/header';
export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <Header />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
