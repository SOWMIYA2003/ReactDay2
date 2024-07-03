// src/App.jsx
import React from 'react';
import styled from 'styled-components';
import StudentInfo from './StudentInfo';
import './App.css'; // Import the global styles

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const App = () => {
  return (
    <AppContainer>
      <StudentInfo />
    </AppContainer>
  );
};

export default App;
