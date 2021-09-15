import {Link, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/' className='home-button'><h1>Home Button</h1></Link>
        <Link to='/login' className='login-button'><h1>Login Button</h1></Link>
      </header>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/login' component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;