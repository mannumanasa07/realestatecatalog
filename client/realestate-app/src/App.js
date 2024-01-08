import './App.css';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './components/SignUp';
import PropertyList from './components/PropertyList';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/' exact component={SignIn} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/propertylist' exact component={PropertyList} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
