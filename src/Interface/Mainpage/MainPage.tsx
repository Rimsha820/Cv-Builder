import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from './Header';
import step1 from '../../UI/assets/step1.png';
import step2 from '../../UI/assets/step2.png';
import step3 from '../../UI/assets/step3.png';
import { useNavigate } from 'react-router-dom';
import home from '../../UI/assets/about-img1.png'


const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/templates'); 
  };

  return (
    <HomePageContainer>
      <Header />
      <main>
        <ContentSection>
          <IntroSection>
            <IntroTexts>Fast. Easy. Effective.</IntroTexts>
            <IntroTitle>Welcome to CV Maker</IntroTitle>
            <IntroText>
              If a sheet of paper represents your entire work life, <br />
              personality, and skills, it better be a pretty amazing piece of <br />
              paper — Let Us do the heavy lifting.
            </IntroText>
            <GetStartedButton onClick={handleNavigate}>
              Create your CV now
            </GetStartedButton>
          </IntroSection>
          <ImageContainer>
            <img src={home} alt="CV Preview" />
          </ImageContainer>
        </ContentSection>

        {/* New Steps Section */}
        <StepsSection>
          <StepsHeading>How It Works</StepsHeading>
          <StepsList>
            <Step>
              <img src={step1} alt="Step 1" />
              <StepTitle>Step 1: Choose a Template</StepTitle>
              <StepDescription>
                Select a professional design that <br />fits your needs.
              </StepDescription>
            </Step>
            <Step>
              <img src={step2} alt="Step 2" />
              <StepTitle>Step 2: Customize Your CV</StepTitle>
              <StepDescription>
                Add your personal information, work <br />history, and skills.
              </StepDescription>
            </Step>
            <Step>
              <img src={step3} alt="Step 3" />
              <StepTitle>Step 3: Download & Share</StepTitle>
              <StepDescription>
                Download your CV and share it with<br /> potential employers.
              </StepDescription>
            </Step>
          </StepsList>
        </StepsSection>

        {/* Footer Section */}
        <Footer>
          <FooterContent>
            <FooterSectionss>
              <FooterHeading>Service</FooterHeading>
              <FooterLink href="#create-resume">Create Resume</FooterLink>
              <FooterLink href="#resume-writing">Resume Writing Service</FooterLink>
              <FooterLink href="#resume-optimization">Resume Optimisation Service</FooterLink>
            </FooterSectionss>

            <FooterSection>
              <FooterHeading>Support</FooterHeading>
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="#about-us">About Us</FooterLink>
            </FooterSection>

            <FooterSection>
              <FooterHeading>Blog</FooterHeading>
              <FooterLink href="#aviation-resume">Aviation Resume Example</FooterLink>
              <FooterLink href="#uber-driver-resume">Uber Driver Resume</FooterLink>
              <FooterLink href="#lifeguard-resume">Lifeguard Resume</FooterLink>
            </FooterSection>
            <FooterSections>
              <FooterHeading>Contact</FooterHeading>
              <FooterLink href="#aviation-resume">+32 1567 456</FooterLink>
              <FooterLink href="#uber-driver-resume">web.com@gmail.com</FooterLink>
              <FooterLink href="#lifeguard-resume">Live website</FooterLink>
            </FooterSections>
          </FooterContent>

          <FooterText>&copy; 2024 CV Maker. All rights reserved.</FooterText>
        </Footer>
      </main>
    </HomePageContainer>
  );
};

export default MainPage;
// Keyframes for slide-in animation from the left
const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Keyframes for slide-in animation from the right
const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Container for the home page
const HomePageContainer = styled.div`
  position: relative; 
  padding: 0 20px; 
`;

const ContentSection = styled.section`
  display: flex;
  align-items: flex-start; 
  justify-content: space-between;
  

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  }
`;

const IntroSection = styled.div`
  flex: 1;
  text-align: left;
  margin-left: 250px;
  margin-top: 250px;
  animation: ${slideInLeft} 1s ease forwards;

  @media (max-width: 1024px) {
    margin-left: 100px;
    margin-top: 150px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
  }
`;

const IntroTitle = styled.h2`
  font-size: 2.3rem;
  color: #333;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.3rem;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const IntroTexts = styled.p`
  font-size: 1.5rem;
  color: #15177b;
  font-weight: bold;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const GetStartedButton = styled.button`
  padding: 12px 20px;
  font-size: 1rem;
  color: black;
  background-color: #f3c53e;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.8rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 
  animation: ${slideInRight} 1s ease forwards;

  img {
    max-width: 70%;
    height: auto;
    margin-top: 90px;
    margin-right: 70px;
    border-radius: 8px; 

    @media (max-width: 1024px) {
      margin-right: 40px;
      max-width: 90%;
    }

    @media (max-width: 768px) {
      margin-top: 20px;
      max-width: 100%;
      margin-right: 0;
    }
  }
`;

const StepsSection = styled.section`
  margin-top: 120px;
  text-align: center;

  @media (max-width: 1024px) {
    margin-top: 150px;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

const StepsHeading = styled.h2`
  font-size: 2.4rem;
  color: #333;
  margin-bottom: 70px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const StepsList = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: center; 
  gap: 180px; 

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;

const Step = styled.div`
  text-align: center;
  animation: ${slideInRight} 1s ease forwards;

  img {
    max-width: 300px; 
    height: auto;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      max-width: 150px;
    }

    @media (max-width: 480px) {
      max-width: 120px;
    }
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Footer = styled.footer`
  background-color: #f3f3f5;
  text-align: center;
  padding: 40px;
  margin-top: 200px;
  height: 350px;

  @media (max-width: 1024px) {
    height: auto;
    padding: 30px 20px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin-top: 100px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    text-align: center; 
  }
`;

const FooterSections = styled.div`
  flex: 1;
  margin: 0;
  text-align: center;
  margin-right: 300px;

  @media (max-width: 1024px) {
    margin-right: 100px;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    margin-right: 0;
    text-align: center;
  }
`;

const FooterSectionss = styled.div`
  flex: 1;
  margin: 0;
  text-align: center;
  margin-left: 300px;

  @media (max-width: 1024px) {
    margin-left: 100px;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    margin-left: 0;
    text-align: center;
  }
`;

const FooterHeading = styled.h4`
  color: black;
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const FooterLink = styled.a`
  display: block;
  color: black;
  font-size: 1rem;
  margin-top: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FooterText = styled.p`
  font-size: 1.2rem;
  color: black;
  margin-top: 100px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 50px;
  }
`;
