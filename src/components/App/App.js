import { lazy, Suspense } from 'react';
import Section from "../Section";
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Section>
      <Switch>
        <Route path='/' exact></Route>
        <Route path='/newUser'></Route>
        <Route path='/editUser/:id'></Route>
      </Switch>
    </Section>
  );
};

export default App;
