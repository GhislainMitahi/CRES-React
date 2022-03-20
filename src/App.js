
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Navbar  from './components/Navbar';
import Banner from './components/Banner';
import CresObject  from './components/CresObject';
import Evenements from './components/Evenements';
import Statistiques from './components/Statistiques';
import Equipe from './components/Equipe';
import Equipe2 from './components/Equipe2';
import Footer from './components/Footer';
import Separator from './components/Separator';
import './App.css';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Banner/>
  <CresObject/>
  <Evenements/>
  <Statistiques/>
  <Separator/>
  <Equipe/>
  <Equipe2/>
  <Footer/>
    <Switch>
      <Route />
    </Switch>
  </BrowserRouter>
  )
}

export default App;
