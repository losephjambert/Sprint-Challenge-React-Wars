import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/CardList';
import people from './api/stubPeople';
import { peopleUrl } from './api/urls';

console.log(people, peopleUrl);

const App = () => {
  const [peoples, setPeople] = useState(people);
  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <CardList people={people} />
    </div>
  );
};

export default App;
