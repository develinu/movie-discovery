import { Route } from 'react-router-dom'

import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header'
import Headline from './components/Headline';
import MovieDetail from './components/MovieDetail';
import MovieList from './components/MovieList';
import Recommend from './components/Recommend';
import Search from './components/Search'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Route exact path="/">
          <Headline />
          <Search />
          <MovieList />
        </Route>
        <Route exact path="/movie/:id">
          <MovieDetail />
        </Route>
        <Route exact path="/recommend">
          <Recommend />
        </Route>
        <Footer />
      </div>
    </div>
  );
}

export default App;
