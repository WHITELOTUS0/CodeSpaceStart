import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={LoginPage} />
        <PrivateRoute path="/home" component={Home} />
      </div>
    </Router>
  );
}

// Create a custom route to handle authentication
function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = /* Add your authentication logic here */ true; // Replace with your authentication check

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default App;
