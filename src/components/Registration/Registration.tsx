import * as React from 'react';
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Col } from 'reactstrap';
import InputField from '../InputField/InputField';
import styled from 'styled-components';
import { submitUser } from '../../features/users/actions';
import gql from 'graphql-tag';

const Wrapper = styled.div`
  padding-top: 40px;
  margin: 0 auto 20px;
`;
const Title = styled.h2`
  color: #8cb7dc;
  text-align: center;
  margin-bottom: 20px;
`;
const Button = styled.button`
  width: 90px;
  height: 40px;
  display: block;
  color: white;
  line-height: 40px;
  border-radius: 4px;
  border: none;
  background-color: #8cb7dc;
  margin: 0 auto 20px;
  cursor: pointer;
  &:hover {
    background-color: #6e9cc5;
  }
`;

const QUERY = ({ firstName, lastName, email, password }) => gql`
  mutation {
    createUser(input: {
      firstName: "${firstName}"
      lastName: "${lastName}"
      email: "${email}"
      password: "${password}"
    }) {
      id
      firstName
      lastName
      email
    }
  } 
`;

type Props = {
  handleSubmit: (values) => ({}),
  submitUser: (values) => (Promise<object>),
  reset: () => {}
}

class Registration extends React.Component<Props> {
  submit = ({ firstName, lastName, email, password }) => {
    const query = QUERY({ firstName, lastName, email, password });
    this.props.submitUser(query)
    .then(this.props.reset);
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <Wrapper>
        <Title>Registration</Title>
        <Form onSubmit={handleSubmit((values) => this.submit(values))}>
          <FormGroup row>
            <Label for="firstName" sm={2}>First name: </Label>
            <Col sm={10}>
              <Field
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Enter first name"
                component={InputField} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="lastName" sm={2}>Last name: </Label>
            <Col sm={10}>
              <Field
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Enter last name"
                component={InputField} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={2}>Email: </Label>
            <Col sm={10}>
              <Field
                id='email'
                type="text"
                name="email"
                placeholder="Enter your email"
                component={InputField} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="password" sm={2}>Password: </Label>
            <Col sm={10}>
              <Field
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                component={InputField} />
            </Col>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Wrapper>
    )
  }
}

export default connect(null, { submitUser })(reduxForm({ form: 'RegistrationForm' })(Registration));