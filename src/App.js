
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Navbar  from './components/Navbar';
import './App.css';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
    <Switch>
      <Route />
    </Switch>
  </BrowserRouter>
  )
}

export default App;
