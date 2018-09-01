import * as React from 'react';
import { Card, CardImg, CardBody } from 'reactstrap';
import styled from 'styled-components';

import Comments from './Comments';

const Logo = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const CardHead = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 5px;
`;

const MainCard = ({ id, name, location, logoImg, mainImg, comments }) => {
  return (
    <Card style={{ marginBottom: "20px"}}>
      <CardHead>
        <Logo>
          <img className="logo-img" src={logoImg} alt="logo_image" />
        </Logo>
        <div style={{ marginLeft: "10px"}}>
          <p>{name}</p>
          <p>{location}</p>
        </div>
      </CardHead>
      <CardImg top width="100%" src={mainImg} alt="Card image cap" />
      <CardBody>
        <Comments postId={id} comments={comments} />
      </CardBody>
    </Card>
  )
}

export default MainCard;
