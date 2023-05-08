import { Switch, Route, Redirect } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Tittle from './components/Tittle/Tittle';
import Cards from './components/Cards/Cards';
import generations from './data/generations';
import './App.scss';
import PokedexView from './components/PokedexView'
function App() {

  return (
    <>
      <div className='content'>
        <Tittle />
        <Navigation />

        <Switch>
          <Route exact path="/">
            <Redirect to={generations[0].link} />
          </Route>
          {generations.map(({ id, link }) => (
            <Route key={id} exact path={'/' + link}>
              <PokedexView generation={id} />
            </Route>
          ))}
        </Switch>

        <Cards />
      </div>
    </>
  );
}

export default App;
