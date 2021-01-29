import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import 'styles/index.scss';

import Home from 'pages/Home';

const App = () => {
  return (
    <React.StrictMode>
      <HashRouter basename="/">
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </HashRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));