import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useCVContext } from '../Forms/FormContext';  



const Template5: React.FC = () => {
  const { formData, dummyData } = useCVContext();
  const data = formData.personal.name ? formData : dummyData;

  
  const { personal, skillsAndLanguages, experience } = data;
  const { name, profession,  city, country, postalCode, email, phone } = personal;
  const { skills, skillLevel, languages, languageProficiency } = skillsAndLanguages;
  const { workExperience, education, professionalSummary } = experience;


  const skillsWithLevel = skills
    ? skills.split(',').map((skill, index) => ({
        name: skill.trim(),
        level: skillLevel.split(',')[index] || 'N/A',
      }))
    : dummyData.skillsAndLanguages.skills.split(',').map((skill, index) => ({
        name: skill.trim(),
        level: dummyData.skillsAndLanguages.skillLevel.split(',')[index] || 'N/A',
      }));

  // Fallback data for Languages
  const languagesWithProficiency = languages
    ? languages.split(',').map((language, index) => ({
        name: language.trim(),
        proficiency: languageProficiency.split(',')[index] || 'N/A',
      }))
    : dummyData.skillsAndLanguages.languages.split(',').map((language, index) => ({
        name: language.trim(),
        proficiency: dummyData.skillsAndLanguages.languageProficiency.split(',')[index] || 'N/A',
      }));

  // Fallback data for Work Experience and Education
  const workHistory = workExperience.length > 0 ? workExperience : dummyData.experience.workExperience;
  const educationHistory = education.length > 0 ? education : dummyData.experience.education;

  return (
    <Container>
      <Header>
        <Name>{name || 'John Doe'}</Name>
        <Profession>{profession || 'Software Engineer'}</Profession>
      </Header>
      <MainContent>
        <Column>
          <SectionTitle>Professional Summary</SectionTitle>
          <p>{professionalSummary || 'Highly motivated individual with a versatile skill set, including team collaboration, project management, and strong communication skills. Ready to bring valuable skills and enthusiasm to any role.'}</p>
          <Separator />
          <SectionTitle>Skills</SectionTitle>
          <List>
            {skillsWithLevel.length > 0 ? (
              skillsWithLevel.map((skill, index) => (
                <ListItem key={index}>
                  <ListIcon />
                  {skill.name} - {skill.level}
                </ListItem>
              ))
            ) : (
              <ListItem>No skills data available.</ListItem>
            )}
          </List>
          <Separator />
          <SectionTitle>Languages</SectionTitle>
          <List>
            {languagesWithProficiency.length > 0 ? (
              languagesWithProficiency.map((language, index) => (
                <ListItem key={index}>
                  <ListIcon />
                  {language.name} - {language.proficiency}
                </ListItem>
              ))
            ) : (
              <ListItem>No languages data available.</ListItem>
            )}
          </List>
          <Separator />
          <ContactSection>
            <SectionTitle>Contact</SectionTitle>
            <ContactInfo>
              <FaMapMarkerAlt />
              <span>{city || '123 Main Street'}, {country || 'City'}, {postalCode || 'State'}, {postalCode || '12345'}</span>
            </ContactInfo>
            <ContactInfo>
              <FaEnvelope />
              <span>{email || 'email@example.com'}</span>
            </ContactInfo>
            <ContactInfo>
              <FaPhoneAlt />
              <span>{phone || '+123 456 7890'}</span>
            </ContactInfo>
          </ContactSection>
        </Column>

        <Column>
          <SectionTitle>Work History</SectionTitle>
          {workHistory.length > 0 ? (
            workHistory.map((work, index) => (
              <div key={index}>
                <h3>{work.jobTitle}</h3>
                <p>{work.companyName} — {work.workCity}, {work.workState} | <em>{work.startDate} - {work.endDate}</em></p>
                <List>
                  {work.workHistory.split('\n').map((task, idx) => (
                    <ListItem key={idx}>
                      <ListIcon />
                      {task}
                    </ListItem>
                  ))}
                </List>
              </div>
            ))
          ) : (
            <p>No work history available.</p>
          )}
          <Separator />
          <SectionTitle>Education</SectionTitle>
          {educationHistory.length > 0 ? (
            educationHistory.map((edu, index) => (
              <EducationItem key={index}>
                <p>{edu.degreeName}</p>
                <p>{edu.universityName} | <em>{edu.graduationYear}</em></p>
              </EducationItem>
            ))
          ) : (
            <p>No education data available.</p>
          )}
        </Column>
      </MainContent>
    </Container>
  );
};

export default Template5;


// Styled components
const Container = styled.div`
  font-family: 'Urbanist', sans-serif;
  margin: auto;
  padding: 20px;
  background: white;
  width: 720px;
  border: 1px solid black;
`;

const Header = styled.header`
  background: linear-gradient(to right, #4a90e2, #50e3c2);
  color: white;
  text-align: center;
  padding: 30px;
  border-radius: 10px;
`;

const Name = styled.h1`
  margin: 0;
  font-size: 36px;
`;

const Profession = styled.h2`
  margin: 10px 0 0;
  font-size: 24px;
  font-style: italic;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Column = styled.div`
  width: 48%;
`;

const SectionTitle = styled.h3`
  margin-top: 30px;
  font-size: 1.4rem;
  color: black;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  color: black; /* Matches the header color */
`;

const ListIcon = styled(MdKeyboardArrowRight)`
  margin-right: 10px;
  color: #4a90e2;
  font-size: 1.5rem;
`;

const ContactSection = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
`;

const ContactInfo = styled.div`
  line-height: 1.4;
  font-size: 0.9rem;
  color: black;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

const Separator = styled.hr`
  border: none;
  border-bottom: 1px solid #4a90e2;
  margin: 20px 0;
`;

const EducationItem = styled.div`
  display: flex;
  flex-direction: column;
`;