import * as React from 'react';
import AddCommentForm from './AddCommentForm/AddCommentForm';
import styled from 'styled-components';

const Comment = styled.div`
  margin-bottom: 10px;
`;
const Name = styled.a`
  color: black;
  font-weight: 600;
  margin-right: 10px;
  &:hover {
    color: black;
    text-decoration: none;
  }
`;
const Text = styled.span`
  font-size: 12px;
  line-height: 12px;
  vertical-align: baseline;
`;

const Comments = ({ postId, comments }) => {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        {comments ? comments.map(({ author, text }, i) => (
          <Comment key={i}>
            <Name href="#">{author}</Name>
            <Text>{text}</Text>
          </Comment>
        )) : null}
      </div>

      <AddCommentForm postId={postId} form={`AddCommentForm${postId}`} />
    </div>
  )
}

export default Comments;