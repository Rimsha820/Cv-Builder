import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import Template1 from '../Templates/Template1'; 
import Template2 from '../Templates/Template2'; 
import Template3 from '../Templates/Template3'; 
import Template4 from '../Templates/Template4'; 
import Template5 from '../Templates/Template5'; 
import Template6 from '../Templates/Template6'; 
import Template7 from '../Templates/Template7'; 
import Template8 from '../Templates/Template8'; 
import Template9 from '../Templates/Template9'; 
import Template10 from '../Templates/Template10';
import Template11 from '../Templates/Template11';
import Template12 from '../Templates/Template12';
import s1 from '../../UI/assets/s1.png';
import s2 from '../../UI/assets/s2.png';
import s3 from '../../UI/assets/sn.png';
import s13 from '../../UI/assets/s13.png';
import s5 from '../../UI/assets/s5.png';
import s6 from '../../UI/assets/s6.png';
import s7 from '../../UI/assets/s18.png';
import s8 from '../../UI/assets/s17.png';
import s9 from '../../UI/assets/s9.png';
import s15 from '../../UI/assets/s15.png';
import s14 from '../../UI/assets/s14.png';
import s12 from '../../UI/assets/s12.png';


// Templates array
const templates = [
  Template1,
  Template2,
  Template3,
  Template4,
  Template5,
  Template6,
  Template7,
  Template8,
  Template9,
  Template10,
  Template11,
  Template12
];

const images = [s1, s2, s3, s13, s5, s6, s7, s8, s9, s15, s14, s12];

const Flex: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleTemplateClick = (templateIndex: number) => {
    console.log(`Image clicked, templateIndex: ${templateIndex}`); // Debugging log
    setSelectedTemplate(templateIndex);
    setIsModalOpen(true);
  };

  const handleChooseTemplate = () => {
    if (selectedTemplate !== null) {
      setIsModalOpen(false);
      navigate('/template-details', { state: { templateId: selectedTemplate } });
    }
  };

  const handleChooseLater = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <HeaderContainer>
        <GoBackButton onClick={handleGoBack}>
          <FaArrowLeft /> Go Back
        </GoBackButton>
        <Heading>Choose Your Template Now.</Heading>
      </HeaderContainer>
      <Container>
        {images.map((image, index) => (
          <PreviewWrapper
            key={index}
            isSelected={selectedTemplate === index + 1}
            onClick={() => handleTemplateClick(index + 1)}
          >
            <TemplateImage src={image} alt={`Template ${index + 1}`} />
            {selectedTemplate === index + 1 && <CheckMark />}
          </PreviewWrapper>
        ))}
      </Container>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Confirm Your Choice</h2>
            <p style={{ color: 'gray' }}>Would you like to choose this template?</p>
            <ModalButton onClick={handleChooseLater}>Choose Later</ModalButton>
            <ModalButton style={{ backgroundColor: '#f1d11c' }} onClick={handleChooseTemplate}>
              Choose Template
            </ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

export default Flex;

// Styled Components
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 50px; 
  padding: 20px;
`;

const PreviewWrapper = styled.div<{ isSelected: boolean }>`
  position: relative;
  width: 65%; 
  height: 500px; 
  cursor: pointer;
  // border: 2px solid ${({ isSelected }) => (isSelected ? '#007bff' : '#ccc')};
  box-shadow: ${({ isSelected }) => (isSelected ? '0 4px 20px rgba(0, 123, 255, 0.5)' : '0 2px 10px rgba(0, 0, 0, 0.1)')}; /* Add box shadow based on selection */
  transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
  transform: ${({ isSelected }) => (isSelected ? 'scale(1.05)' : 'scale(1)')};
  overflow: hidden; /* Ensure content doesn't overflow */
  margin-left: 120px;
  margin-top: 150px;
`;

const TemplateImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

const CheckMark = styled(FaCheckCircle)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #28a745;
  font-size: 36px; 
  width: 36px; 
  height: 36px; 
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-right: 39%;
  margin-top: 50px;
`;

const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  font-size: 1.2rem;
  color: #007bff;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 160px;
  margin-top: 50px;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }

  svg {
    margin-right: 8px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 390px;
  height: 200px;
`;

const ModalButton = styled.button`
  padding: 13px 20px;
  margin: 10px;
  margin-top: 20px;
  font-size: 1rem;
  color: black;
  background-color: #007bff;
  border: none;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
