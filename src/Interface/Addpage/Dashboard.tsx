import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import Form1 from '../Forms/Form1';
import Form2 from '../Forms/Form2';
import Form3 from '../Forms/Form3';
import TemmplateChosser from '../FLex/Tempaltechooser';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const TemplateDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const templateId = location.state?.templateId;

  const [TemplateComponent, setTemplateComponent] = useState<React.FC | null>(null);
  const [currentForm, setCurrentForm] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const loadTemplate = async () => {
      try {
        switch (templateId) {
          case 1:
            const { default: Template1 } = await import('../Templates/Template1');
            setTemplateComponent(() => Template1);
            break;
          case 2:
            const { default: Template2 } = await import('../Templates/Template2');
            setTemplateComponent(() => Template2);
            break;
          case 3:
            const { default: Template3 } = await import('../Templates/Template3');
            setTemplateComponent(() => Template3);
            break;
          case 4:
            const { default: Template4 } = await import('../Templates/Template4');
            setTemplateComponent(() => Template4);
            break;
          case 5:
            const { default: Template5 } = await import('../Templates/Template5');
            setTemplateComponent(() => Template5);
            break;
          case 6:
            const { default: Template6 } = await import('../Templates/Template6');
            setTemplateComponent(() => Template6);
            break;
          case 7:
            const { default: Template7 } = await import('../Templates/Template7');
            setTemplateComponent(() => Template7);
            break;
          case 8:
            const { default: Template8 } = await import('../Templates/Template8');
            setTemplateComponent(() => Template8);
            break;
          case 9:
            const { default: Template9 } = await import('../Templates/Template9');
            setTemplateComponent(() => Template9);
            break;
          case 10:
            const { default: Template10 } = await import('../Templates/Template10');
            setTemplateComponent(() => Template10);
            break;
          case 11:
            const { default: Template11 } = await import('../Templates/Template11');
            setTemplateComponent(() => Template11);
            break;
          case 12:
            const { default: Template12 } = await import('../Templates/Template12');
            setTemplateComponent(() => Template12);
            break;
          default:
            setTemplateComponent(() => () => <div>Template not found</div>);
        }
      } catch (error) {
        console.error('Error loading template:', error);
        setTemplateComponent(() => () => <div>Error loading template</div>);
      }
    };

    loadTemplate();
  }, [templateId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    if (currentForm < 3) {
      setCurrentForm(currentForm + 1);
    }
  };

  const handlePrevious = () => {
    if (currentForm > 1) {
      setCurrentForm(currentForm - 1);
    }
  };

  const handleChooseAnother = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const downloadPDF = () => {
    const templateContent = document.getElementById("template-content");
    if (templateContent) {
      html2canvas(templateContent, { backgroundColor: "#fff", scale: 1 }).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
          putOnlyUsedFonts: true,
          floatPrecision: 16
        });

        const imgWidth = pdf.internal.pageSize.getWidth() - 20; 
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight); // Add image with padding
        heightLeft -= pdf.internal.pageSize.getHeight();

        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
          heightLeft -= pdf.internal.pageSize.getHeight();
        }

        pdf.save("template.pdf");
      });
    }
  };

  return (
    <Container>
      <ContentArea>
        <Header>
          <GoBackButton onClick={handleGoBack}>
            <FaArrowLeft /> Go Back
          </GoBackButton>
        </Header>
        <MainContent>
          <FormWrapper>
            {currentForm === 1 && <Form1 />}
            {currentForm === 2 && <Form2 />}
            {currentForm === 3 && <Form3 />}
            <ButtonContainer>
              <NavigationButton onClick={handlePrevious} disabled={currentForm === 1}>
                <FaArrowLeft /> Previous
              </NavigationButton>
              <NavigationButtons onClick={handleNext} disabled={currentForm === 3} isNext>
                Next <FaArrowRight />
              </NavigationButtons>
            </ButtonContainer>
          </FormWrapper>
          <TemplateWrapper>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
              <div style={{display:'flex'}}>
              <ActionButton onClick={handleChooseAnother}>Choose Another Template</ActionButton>
                <ActionButtons onClick={downloadPDF}>Download PDF</ActionButtons>
             
              </div>
            </div>
            <div id="template-content">
              {TemplateComponent ? <TemplateComponent /> : <div>Loading...</div>}
            </div>
          </TemplateWrapper>
        </MainContent>
      </ContentArea>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>
              <FaTimes />
            </CloseButton>
            <h2>Choose a Template</h2>
            <TemmplateChosser />
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default TemplateDetails;

// Styled Components
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }

  svg {
    margin-right: 8px;
  }
`;

const MainContent = styled.div`
  display: flex;
  gap: 20px;
`;

const FormWrapper = styled.div`
  flex: 1;
`;

const TemplateWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: scale(0.9);
  transform-origin: top right;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
`;

const NavigationButton = styled.button<{ isNext?: boolean }>`
  padding: 10px 18px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  border: 3px solid black;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 130px;
`;

const NavigationButtons = styled.button<{ isNext?: boolean }>`
  padding: 10px 22px;
  background-color: #e5b51d;
  color: black;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 510px;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  background-color: #f1d11c;
  color: black;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
   margin-left:50px;

`;
const ActionButtons = styled.button`
  padding: 10px 20px;
  background-color: #1783ef ;
  color: white;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left:330px;
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
  width: 60%;
  height: 70%;
  max-width: 1200px;
  position: relative;
  overflow: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;
