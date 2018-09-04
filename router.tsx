import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from "react-redux";
import store from './store';
import App from './app';
import EntryPage from './src/components/EntryPage';
import Registration from './src/components/Registration/Registration';

ReactDOM.render((
  <Provider store={store} >
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="entry" component={EntryPage} />
        <Route path="registration" component={Registration} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))

