import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const LogIn = styled.span`
  display: flex;
`;
const Logo = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Name = styled.span`
  align-self: center;
  margin-left: 10px;
`;

const Login = (props) => {
  if (props.name) {
    return (
      <LogIn>
        <Logo>
          <img className="logo-img" src="https://scontent-frt3-2.cdninstagram.com/vp/257ba28fee0309abb07b6196bd5bb198/5C0CF96B/t51.2885-19/s150x150/30841686_1860612094237314_8456555885861273600_n.jpg" alt="logo_image" />
        </Logo>
        <Name>
          {props.name}
        </Name>
      </LogIn>
    )
  } else {
    return <Button>Login</Button>
  }
}

export default Login;
