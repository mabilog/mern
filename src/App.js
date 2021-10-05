import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Register from './components/Register'
function App() {
  return (
    <Router>
      <div>
        <Link to={'/'}>Home</Link> |
        <Link to={'/login'}>Log In</Link> |
        <Link to={'/register'}>Register</Link>
      </div>
      <Switch>
        <Route exact path={'/register'} component={Register} />
      </Switch>
      
    </Router>
  );
}

export default App;
