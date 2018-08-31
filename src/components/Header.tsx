import * as React from 'react';
import { Navbar, NavbarBrand, Form, Input } from 'reactstrap';

import Login from './Login/Login';

const Header = (props) => {
  return (
    <Navbar light style={{ marginBottom: "15px" }}>
      <NavbarBrand href="/">instawebapp</NavbarBrand>
      <Form>
        <Input placeholder="Seacrh" />
      </Form>
      <Login name="Tom Sandler" />
    </Navbar>
  )
}

export default Header;
