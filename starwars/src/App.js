import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './components/CardList';
import peopleStub from './api/stubPeople';
import { peopleUrl } from './api/urls';
import styled from 'styled-components';

const AppTitle = styled.h1`
  text-align: left;
  text-shadow: 1px 1px 5px #fff;
`;

const App = () => {
  const [people, setPeople] = useState(peopleStub);
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   axios
  //     .get(peopleUrl)
  //     .then(response => {
  //       const { results } = response.data;
  //       console.log(results);
  //       setPeople(people => [...people, ...results]);
  //       setIsLoading(isLoading => !isLoading);
  //     })
  //     .catch(error => {
  //       console.log('I have a bad feeling about this');
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div className='App'>
      <header>
        <AppTitle>React Wars</AppTitle>
      </header>
      <main>{!isLoading && <CardList title={'The People of Star Wars'} people={people} />}</main>
      <footer>&copy; {new Date().getFullYear()} Disney, I guess?</footer>
    </div>
  );
};

export default App;
