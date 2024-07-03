// src/StudentInfo.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import profile from './profile.jpg'; // Make sure this path is correct

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  background-color: white; /* Ensure the container has a static background color */
  width: 100%;
  max-width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Photo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;

const RegNumber = styled.p`
  margin: 5px 0 20px 0;
  font-size: 1em;
  color: #555;
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const AdditionalInfo = styled.div`
  margin-top: 20px;
  transition: opacity 0.5s;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;

const StudentInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container>
      <Header>
        <Photo src={profile} alt="Profile" />

      </Header>
      <Name>Sowmiya</Name>
      <RegNumber>Registration Number: 212221230106</RegNumber>
      <ToggleButton onClick={handleToggle}>
        {isVisible ? 'Hide' : 'Show'} Additional Info
      </ToggleButton>
      <AdditionalInfo isVisible={isVisible}>
        <p>Additional student information goes here...</p>
      </AdditionalInfo>
    </Container>
  );
};

export default StudentInfo;
