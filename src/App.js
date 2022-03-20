
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Navbar  from './components/Navbar';
import Banner from './components/Banner';
import CresObject  from './components/CresObject';
import Evenements from './components/Evenements';
import Statistiques from './components/Statistiques';
import Equipe from './components/Equipe';
import './App.css';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Banner/>
  <CresObject/>
  <Evenements/>
  <Statistiques/>
  <Equipe/>
    <Switch>
      <Route />
    </Switch>
  </BrowserRouter>
  )
}

export default App;
