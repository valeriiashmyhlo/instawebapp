import * as React from 'react';
// import propTypes from 'prop-types';
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import { Form } from 'reactstrap';
import gql from 'graphql-tag';
import { addComment } from '../../features/posts/actions';
import InputField from '../InputField/InputField';

const QUERY = ({ postId, author, text }) => gql`
  mutation {
    createComment(input: {
      postId: "${postId}"
      author: "${author}"
      text: "${text}"
    }) {
      author
      text
    }
  } 
`;

type Props = {
  handleSubmit: (values) => ({}),
  addComment: (values, postId) => (Promise<object>),
  reset: () => {}, 
  postId: string
}

class AddCommentForm extends React.Component<Props> {
  submit(values) {
    const query = QUERY({ postId: this.props.postId, author: "Alex", text: values.comment });
    return this.props.addComment(query, this.props.postId)
    .then(this.props.reset);
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit((values) => this.submit(values))}>
        <Field
          type="text"
          name="comment"
          placeholder="Add a comment..."
          component={InputField} />
      </Form>
    )
  }
}

// AddCommentForm.propTypes = {};

export default connect(null, { addComment })(reduxForm()(AddCommentForm));