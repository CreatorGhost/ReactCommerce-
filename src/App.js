
import './App.css';
import { HomePage } from './pages/Homepage/homepage'
import { Switch, Route } from 'react-router-dom';
import Shop from "./pages/Shop/shop"


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
