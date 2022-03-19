
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Navbar  from './components/Navbar';
import Banner from './components/Banner';
import CresObject  from './components/CresObject';
import './App.css';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Banner/>
  <CresObject/>
    <Switch>
      <Route />
    </Switch>
  </BrowserRouter>
  )
}

export default App;
