import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Products from './components/Products';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/:productname" component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
