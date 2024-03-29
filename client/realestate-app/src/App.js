import './App.css';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './components/SignUp';
import PropertyList from './components/PropertyList';
import BasicInfo from './components/BasicInfo';
import PropertyDetail from "./components/PropertyDetail"
import GeneralInfo from './components/GeneralInfo';
import LocationInfo from './components/LocationInfo';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/' exact component={SignIn} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/propertylist' exact component={PropertyList} />
          <Route path='/basicinfo' exact component={BasicInfo}/>
          <Route path='/propertydetails' exact component={PropertyDetail}/>
          <Route path='/generalinfo' exact component={GeneralInfo}/>
          <Route path='/locationinfo' exact component={LocationInfo}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
