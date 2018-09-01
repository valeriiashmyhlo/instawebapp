import * as React from 'react';
// import propTypes from 'prop-types';
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import gql from 'graphql-tag';
import { addComment } from '../../features/posts/actions';

const QUERY = ({ author, text }) => gql`
  mutation {
    createComment(input: {
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

const InputField = ({
  input,
  type,
  name,
  placeholder,
  meta: { touched, error }
}) => (
    <div>
      <Input
        {...input}
        type={type}
        name={name}
        placeholder={placeholder}
        invalid={!!(touched && error)}
      />
      <FormFeedback>{error}</FormFeedback>
    </div>
  );

class AddCommentForm extends React.Component<Props> {
  submit(values) {
    const query = QUERY({ author: "Alex", text: values.comment });
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

export default connect(null, { addComment })(reduxForm({
  form: "AddCommentForm"
}, )(AddCommentForm));