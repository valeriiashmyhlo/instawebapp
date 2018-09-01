import * as React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import FirstComponent from './FirstComponent';
import MainCard from './MainCard';
// import Query from './Query';
import { fetchPosts } from '../features/posts/actions';

const QUERY = gql`
  query Query {
    posts {
      id,
      name,
      location,
      logoImg,
      mainImg,
      comments {
        author,
        text
      }
    }
  } 
`;

// console.log(QUERY)

interface Props {
  query: string,
  fetchPosts: (query) => ({}),
  posts: any
}

class MainContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchPosts(QUERY);
  }

  render() {
    const { posts } = this.props.posts;

    return (
      <Row>
        <Col sm="8">
          {posts ?
            posts.map((post) => <MainCard key={post.id} {...post} />) :
            null
          }
        </Col>
        {/* <Col sm="4">
          info
        </Col> */}
      </Row>
    )
  }
}

export default connect((state, props) => ({
  posts: state.posts
}), { fetchPosts })(MainContainer);
