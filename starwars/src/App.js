import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/CardList';
import { peopleUrl } from './api/urls';

const App = () => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(peopleUrl)
      .then(response => {
        const { results } = response.data;
        console.log(results);
        setPeople(people => [...people, ...results]);
        setIsLoading(isLoading => !isLoading);
      })
      .catch(error => {
        console.log('I have a bad feeling about this');
        console.error(error);
      });
  }, []);

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      {!isLoading && <CardList people={people} />}
    </div>
  );
};

export default App;
