import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import people from './api/stubPeople';
import { peopleUrl } from './api/urls';

console.log(people, peopleUrl);

const App = () => {
  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
    </div>
  );
};

export default App;
