
import './App.css';
import { HomePage } from './pages/Homepage/homepage'
import { Switch, Route } from 'react-router-dom';
import Shop from "./pages/Shop/shop"
import Header from "./components/Header/header"

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
