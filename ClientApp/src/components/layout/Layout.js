import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './navbar/NavMenu';
import { Footer } from './footer/Footer';
//import { SideBar } from './sidebar/SideBar';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container tag="main">
          {this.props.children}
        </Container>
        <Footer />
      </div>
    );
  }
}
