import React from 'react';

import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/bulma/css/bulma.min.css';
import SearchScreen from './screens/SearchScreen';

import { SearchScreenWapper } from './styles';

const App = () => (
  <>
    <section className="hero is-dark">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Searchable API
          </h1>         
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <SearchScreenWapper>
          <SearchScreen />
        </SearchScreenWapper>        
      </div>
    </section>
  </>
)

export default App;
