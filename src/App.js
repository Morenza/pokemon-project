import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PokemonGeneration from "./pages/PokemonGeneration";
import PokemonOwned from "./pages/PokemonOwned";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={PokemonGeneration} />
        <Route path='/PokemonOwned' component={PokemonOwned} />
        <Route path='/PokemonList' component={PokemonList} />
        <Route path='/PokemonDetail/:name' component={PokemonDetail} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
