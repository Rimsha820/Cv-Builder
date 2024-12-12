import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { RiArrowRightCircleLine } from 'react-icons/ri';
import { useCVContext } from '../Forms/FormContext';


const Template12: React.FC = () => {
  const { formData, dummyData } = useCVContext();
  const data = formData.personal.name ? formData : dummyData;

  // Skills with level
  const skillsWithLevel = data.skillsAndLanguages.skills
    ? data.skillsAndLanguages.skills.split(',').map((skill, index) => ({
        name: skill.trim(),
        level: data.skillsAndLanguages.skillLevel.split(',')[index] || 'N/A',
      }))
    : dummyData.skillsAndLanguages.skills.split(',').map((skill, index) => ({
        name: skill.trim(),
        level: dummyData.skillsAndLanguages.skillLevel.split(',')[index] || 'N/A',
      }));

  // Languages with proficiency
  const languagesWithProficiency = data.skillsAndLanguages.languages
    ? data.skillsAndLanguages.languages.split(',').map((language, index) => ({
        name: language.trim(),
        proficiency: data.skillsAndLanguages.languageProficiency.split(',')[index] || 'N/A',
      }))
    : dummyData.skillsAndLanguages.languages.split(',').map((language, index) => ({
        name: language.trim(),
        proficiency: dummyData.skillsAndLanguages.languageProficiency.split(',')[index] || 'N/A',
      }));

  // Work Experience
  const workExperience = data.experience.workExperience.length > 0
    ? data.experience.workExperience
    : dummyData.experience.workExperience;

  // Education
  const education = data.experience.education.length > 0
    ? data.experience.education
    : dummyData.experience.education;

  // Contact Information
  const contactInfo = data.personal.city || data.personal.email || data.personal.phone
    ? {
        city: data.personal.city,
        country: data.personal.country,
        postalCode: data.personal.postalCode,
        email: data.personal.email,
        phone: data.personal.phone
      }
    : {
        city: dummyData.personal.city,
        country: dummyData.personal.country,
        postalCode: dummyData.personal.postalCode,
        email: dummyData.personal.email,
        phone: dummyData.personal.phone
      };

  // Professional Summary
  const professionalSummary = data.experience.professionalSummary || dummyData.experience.professionalSummary;

  return (
    <Container>
      <Header>
        <NameSection>
          <Name>{data.personal.name}</Name>
          <Profession>{data.personal.profession}</Profession>
        </NameSection>
        <Separator />
        <ProfessionalSummarySection>
          <SectionTitle>Professional Summary</SectionTitle>
          <p>{professionalSummary}</p>
        </ProfessionalSummarySection>
      </Header>
      <MainContent>
        <Column>
          <SectionTitle>Skills</SectionTitle>
          <List>
            {skillsWithLevel.length > 0 ? (
              skillsWithLevel.map((skill, index) => (
                <ListItem key={index}>
                  <ListIcon />{skill.name} - {skill.level}
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
                  <ListIcon />{language.name} - {language.proficiency}
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
              <span>{contactInfo.city}, {contactInfo.country} — {contactInfo.postalCode}</span>
            </ContactInfo>
            <ContactInfo>
              <FaEnvelope />
              <span>{contactInfo.email}</span>
            </ContactInfo>
            <ContactInfo>
              <FaPhoneAlt />
              <span>{contactInfo.phone}</span>
            </ContactInfo>
          </ContactSection>
        </Column>

        <Column>
          <SectionTitle>Work History</SectionTitle>
          {workExperience.length > 0 ? (
            workExperience.map((work, index) => (
              <div key={index}>
                <h3>{work.jobTitle}</h3>
                <p>
                  {work.companyName} — {work.workCity}, {work.workState} | <em>{work.startDate} - {work.endDate}</em>
                </p>
                <List>
                  {work.workHistory.split('\n').map((task, idx) => (
                    <ListItem key={idx}>
                      <ListIcon />{task}
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
          <List>
            {education.length > 0 ? (
              education.map((edu, index) => (
                <ListItem key={index}>
                  <EducationItem>
                    <p>{edu.degreeName}</p>
                    <p>{edu.universityName} — {data.personal.city}, {data.personal.country} | <em>{edu.graduationYear}</em></p>
                  </EducationItem>
                </ListItem>
              ))
            ) : (
              <ListItem>No education data available.</ListItem>
            )}
          </List>
        </Column>
      </MainContent>
    </Container>
  );
};

export default Template12;

// Styled components
const Container = styled.div`
  font-family: 'Urbanist', sans-serif;
  margin: auto;
  padding: 20px;
  background: #f5f5f5;
  width: 720px;
  border: 1px solid black;
`;

const Header = styled.header`
  text-align: center;
  border-radius: 10px;
`;

const NameSection = styled.div`
  background: linear-gradient(to right, #f72993, #f595c6);
  color: white;
  padding: 10px;
  border-radius: 6px;
`;

const Name = styled.h1`
  margin: 0;
  font-size: 30px;
`;

const Profession = styled.h2`
  margin: 10px 0 0;
  font-size: 20px;
  font-style: italic;
`;

const ProfessionalSummarySection = styled.div`
  background-color: white;
  padding: 5px;
  border-radius: 5px;
  margin-top: 10px;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Column = styled.div`
  width: 48%;
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  color: #0a3d62;
  border-bottom: 1px solid #ddd;
  padding-bottom: 3px;
  margin-bottom: 10px;
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
  color: black;
`;

const ListIcon = styled(RiArrowRightCircleLine)`
  margin-right: 10px;
  color: black;
  font-size: 1.5rem;
`;

const ContactSection = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

const ContactInfo = styled.div`
  line-height: 1.4;
  font-size: 0.9rem;
  color: black;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const Separator = styled.hr`
  border: none;
  border-bottom: 1px solid black;
  margin: 20px 0;
`;

const EducationItem = styled.div`
  display: flex;
  flex-direction: column;
`;