import React from 'react';
import styled from 'styled-components';
import logo from '../../UI/assets/logo.png';



const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <Logo src={logo} alt="CV Maker Logo" />
        <Title>CV Maker</Title>
      </TitleContainer>
      <LoginButton>Login</LoginButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid #ddd;
  background:#ebedef ;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px;

  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px; 
  }
`;

const Title = styled.h1`
  color: #333;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  /* Responsive font size */
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Logo = styled.img`
  width: 80px; 
  height: auto;


  /* Responsive adjustments */
  @media (max-width: 768px) {
    width: 30px;
  }
`;


const LoginButton = styled.button`
  padding: 10px 26px;
  font-size: 1rem;
  color: #007bff;
  background-color: transparent;
  border: 1px solid #007bff;
  border-radius: 25px;
  cursor: pointer;
  margin-right: 100px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
    max-width: 200px;
  }
`;
