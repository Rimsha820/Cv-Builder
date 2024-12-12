import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { useCVContext } from '../Forms/FormContext';



const Tempalte11: React.FC = () => {
  const { formData, dummyData } = useCVContext();
  const data = formData.personal.name ? formData : dummyData;

  // Handle Skills Data
  const skillsWithLevel = data.skillsAndLanguages.skills
    ? data.skillsAndLanguages.skills.split(',').map((skill, index) => ({
        name: skill.trim(),
        level: data.skillsAndLanguages.skillLevel.split(',')[index] || 'N/A',
      }))
    : dummyData.skillsAndLanguages.skills.split(',').map((skill, index) => ({
        name: skill.trim(),
        level: dummyData.skillsAndLanguages.skillLevel.split(',')[index] || 'N/A',
      }));

  // Handle Languages Data
  const languagesWithProficiency = data.skillsAndLanguages.languages
    ? data.skillsAndLanguages.languages.split(',').map((language, index) => ({
        name: language.trim(),
        proficiency: data.skillsAndLanguages.languageProficiency.split(',')[index] || 'N/A',
      }))
    : dummyData.skillsAndLanguages.languages.split(',').map((language, index) => ({
        name: language.trim(),
        proficiency: dummyData.skillsAndLanguages.languageProficiency.split(',')[index] || 'N/A',
      }));

  // Handle Work Experience Data
  const workExperience = data.experience.workExperience.length > 0
    ? data.experience.workExperience
    : dummyData.experience.workExperience;

  // Handle Education Data
  const education = data.experience.education.length > 0
    ? data.experience.education
    : dummyData.experience.education;

  // Handle Contact Information Data
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

  // Handle Professional Summary Data
  const professionalSummary = data.experience.professionalSummary || dummyData.experience.professionalSummary;

  return (
    <Container>
      <MainContent>
        <LeftColumn>
          <NameSection>
            <Name>{data.personal.name}</Name>
            <Profession>{data.personal.profession}</Profession>
          </NameSection>

          <SectionTitle>Professional Summary</SectionTitle>
          <p style={{ fontSize: '1.1rem' }}>{professionalSummary}</p>

          <Separator />

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

          <Separator />

          <SectionContainer>
            <SectionTitle>Skills</SectionTitle>
            <List>
              {skillsWithLevel.length > 0 ? (
                skillsWithLevel.map((skill, index) => (
                  <ListItem key={index}>
                    {skill.name} - {skill.level}
                  </ListItem>
                ))
              ) : (
                <ListItem>No skills data available.</ListItem>
              )}
            </List>
          </SectionContainer>

          <Separator />

          <SectionContainer>
            <SectionTitle>Languages</SectionTitle>
            <List>
              {languagesWithProficiency.length > 0 ? (
                languagesWithProficiency.map((language, index) => (
                  <ListItem key={index}>
                    {language.name} - {language.proficiency}
                  </ListItem>
                ))
              ) : (
                <ListItem>No languages data available.</ListItem>
              )}
            </List>
          </SectionContainer>
        </LeftColumn>

        <RightColumn>
          <ProfileImageContainer>
            {data.personal.image ? (
              <ProfileImage src={URL.createObjectURL(data.personal.image)} alt="Profile" />
            ) : (
              <ProfileIcon />
            )}
          </ProfileImageContainer>

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
                    <ListItem key={idx}>{task}</ListItem>
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
                    <p>
                      {edu.universityName} | <em>{edu.graduationYear}</em>
                    </p>
                  </EducationItem>
                </ListItem>
              ))
            ) : (
              <ListItem>No education data available.</ListItem>
            )}
          </List>
        </RightColumn>
      </MainContent>
    </Container>
  );
};

export default Tempalte11;


// Styled components
const Container = styled.div`
  font-family: 'Urbanist', sans-serif;
  margin: auto;
  padding: 20px;
  background: white;
  width: 720px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 115vh;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Column = styled.div`
  width: 48%;
`;

const LeftColumn = styled(Column)`
  display: flex;
  flex-direction: column;
`;

const NameSection = styled.div`
  padding: 15px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-right: 60px;
`;

const Name = styled.h1`
  font-size: 28px;
  margin: 0;
  color: black;
`;

const Profession = styled.h2`
  font-size: 18px;
  margin: 5px 0 0 0;
  color: #333;
`;

const ProfileImageContainer = styled.div`
  width: 170px;
  height: 170px;
  border: 1px solid gray;
  background: #f2f2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: 80px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  
`;

const ProfileIcon = styled(CgProfile)`
  width: 170px;
  height: 170px;
  color: #e1dde1;
`;

const SectionTitle = styled.h3`
  margin-top: 10px;
  font-size: 1.4rem;
  color: black;
  background-color: #a8d9ac;
  padding: 10px;
  border-radius: 5px;
`;

const SectionContainer = styled.div`
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: black;
  position: relative;
  padding-left: 25px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: black;
    position: absolute;
    left: 0;
  }
`;

const ContactInfo = styled.div`
  line-height: 1.4;
  font-size: 0.9rem;
  color: black;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`;

const Separator = styled.hr`
  border: none;
  border-bottom: 1px solid gray;
  margin: 20px 0;
`;

const EducationItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled(Column)`
  display: flex;
  flex-direction: column;
`;