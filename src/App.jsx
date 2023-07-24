import { Switch, Route, Redirect } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Tittle from './components/Tittle/Tittle';
import DetailsView from './components/DetailsView';
import generations from './data/generations';
import './App.scss';
import PokemonsProvider from './context/pokemonsProvider';
import PokedexView from './components/PokedexView'
import withRouter from './router/withRouter';
function App() {

  return (
    <>
      <PokemonsProvider>
        <div className='pokedex-app'>
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

          <DetailsView />
        </div>
      </PokemonsProvider>
    </>
  );
}

export default withRouter(App);
