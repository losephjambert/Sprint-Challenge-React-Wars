import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './components/CardList';
import peopleStub from './api/stubPeople'; // stub data for testing
import { peopleUrl } from './api/urls';
import styled from 'styled-components';
import getDataAsync from './api/getDataAsync';

const StyledHeader = styled.header`
  padding: 30px 0;
`;

const AppTitle = styled.h1`
  text-align: left;
  text-indent: 10px;
`;

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getDataAsync(peopleUrl, setData);
  }, []);

  const getNextPage = nextPage => {
    console.log('clicky', nextPage);
    getDataAsync(nextPage, setData);
  };

  return (
    <div className='App'>
      <StyledHeader>
        <AppTitle>React Wars</AppTitle>
      </StyledHeader>
      <main>
        {data.results && (
          <CardList
            title={'The People of Star Wars'}
            people={data.results}
            nextPage={data.next}
            count={data.count}
            onClick={getNextPage}
          />
        )}
      </main>
      <footer>&copy; {new Date().getFullYear()} Disney, I guess?</footer>
    </div>
  );
};

export default App;
