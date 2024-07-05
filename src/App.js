import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Airports from './pages/Airports';
import Airport from './pages/Airport';
import Dashboard from './pages/Dashboard';
import Videos from './pages/Videos';
import List1 from './pages/List1';
import List2 from './pages/List2';
import List3 from './pages/List3';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/airports" component={Airports} />
            <Route path="/airports/:id" component={Airport} />
            <Route path="/videos" component={Videos} />
            <Route path="/list1" component={List1} />
            <Route path="/list2" component={List2} />
            <Route path="/list3" component={List3} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
