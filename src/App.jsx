import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {Orginals,Action,Trend,Comdey,Horror,Romance,Documentaries} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={Orginals} title='Netflix Orginals' />
      <RowPost url={Action} title='Action' isSmall />
      <RowPost url={Trend} title='Trending' isSmall />
      <RowPost url={Comdey} title='Comedy' isSmall />
      <RowPost url={Horror} title='Horror' isSmall />
      <RowPost url={Romance} title='Romance' isSmall />
      <RowPost url={Documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
