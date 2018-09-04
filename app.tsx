import * as React from "react";
import * as ReactDOM from "react-dom";
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './src/components/Header';
import MainContainer from './src/components/MainContainer';
import './styles.css';
import { Router, Route, Link, browserHistory } from 'react-router';
import EntryPage from './src/components/EntryPage';

class App extends React.Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        {/* <MainContainer /> */}
        {/* <EntryPage /> */}
        {this.props.children}
      </Container>
    )
  }
};

export default App;
