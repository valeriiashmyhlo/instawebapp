import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './src/components/Header';
import MainContainer from './src/components/MainContainer';
import store from './store';
import './styles.css';

// const networkInterface = createNetworkInterface({
//   uri: 'http://localhost:3001/graphql',
// });

ReactDOM.render(
  <Provider store={store} >
    <Container>
      <Header />
      <MainContainer />
    </Container>
  </Provider>,
  document.getElementById("root")
);
