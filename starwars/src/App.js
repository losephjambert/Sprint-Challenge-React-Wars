import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './components/CardList';
// import peopleStub from './api/stubPeople'; // stub data for testing
import { peopleUrl } from './api/urls';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 30px 0;
`;

const AppTitle = styled.h1`
  text-align: left;
  text-indent: 10px;
`;

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
      <StyledHeader>
        <AppTitle>React Wars</AppTitle>
      </StyledHeader>
      <main>{!isLoading && <CardList title={'The People of Star Wars'} people={people} />}</main>
      <footer>&copy; {new Date().getFullYear()} Disney, I guess?</footer>
    </div>
  );
};

export default App;
