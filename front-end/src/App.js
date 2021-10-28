import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/components/shared/Header/Header';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import RegisterVol from './pages/RegisterVol/RegisterVol';
import MyEvents from './pages/Account/MyEvents/MyEvents';
import VolList from './pages/Dashboard/VolList/VolList';
import VolAdd from './pages/Dashboard/VolAdd/VolAdd';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register/:id">
          <RegisterVol />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/account/my-events">
          <MyEvents />
        </Route>
        <Route exact path="/dashboard">
          <VolList />
        </Route>
        <Route path="/dashboard/events/add-new">
          <VolAdd />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
