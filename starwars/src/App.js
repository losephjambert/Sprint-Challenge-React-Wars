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
  const [nextPage, setNextPage] = useState(null);
  const [resultTotal, setResultTotal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(peopleUrl)
      .then(response => {
        const { results, count, next } = response.data;
        console.log(response);
        setPeople(people => [...people, ...results]);
        setNextPage(next);
        setResultTotal(count);
        setIsLoading(isLoading => !isLoading);
      })
      .catch(error => {
        console.log('I have a bad feeling about this');
        console.error(error);
      });
  }, []);

  const getNextPage = nextPage => {
    console.log('clicky', nextPage);
    axios
      .get(nextPage)
      .then(response => {
        const { results, next } = response.data;
        console.log(response);
        setPeople(people => [...people, ...results]);
        setNextPage(next);
      })
      .catch(error => {
        console.log('I have a bad feeling about this');
        console.error(error);
      });
  };

  return (
    <div className='App'>
      <StyledHeader>
        <AppTitle>React Wars</AppTitle>
      </StyledHeader>
      <main>
        {!isLoading && (
          <CardList
            title={'The People of Star Wars'}
            people={people}
            nextPage={nextPage}
            count={resultTotal}
            onClick={getNextPage}
          />
        )}
      </main>
      <footer>&copy; {new Date().getFullYear()} Disney, I guess?</footer>
    </div>
  );
};

export default App;
