
import './App.css';
import { HomePage } from './pages/Homepage/homepage'
import { Switch, Route } from 'react-router-dom';
import Shop from "./pages/Shop/shop"
import Header from "./components/Header/header"
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
