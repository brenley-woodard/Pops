import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home.js';
import Collection from './components/Collection/Collection.js';
import PopForm from './components/PopForm/PopForm.js';
import Wishlist from './components/Wishlist/Wishlist.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/collection" component={Collection}/>
        <Route exact path="/popform" component={PopForm}/>
        <Route exact path="/wishlist" component={Wishlist}/>
      </Switch>
    </div>
  );
}

export default App;
