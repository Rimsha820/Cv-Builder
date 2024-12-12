import React from 'react';
import styled from 'styled-components';
import { useCVContext } from '../Forms/FormContext';
import { RiArrowRightDoubleLine } from 'react-icons/ri';



const Template9: React.FC = () => {
  const { formData, dummyData } = useCVContext();
  const data = formData.personal.name ? formData : dummyData;

  const skillsWithLevel = data.skillsAndLanguages.skills
    ? data.skillsAndLanguages.skills.split(',').map((skill, index) => ({
        name: skill.trim(),
        level: data.skillsAndLanguages.skillLevel.split(',')[index] || 'N/A',
      }))
    : dummyData.skillsAndLanguages.skills.split(',').map((skill, index) => ({
        name: skill.trim(),
        level: dummyData.skillsAndLanguages.skillLevel.split(',')[index] || 'N/A',
      }));

  const languagesWithProficiency = data.skillsAndLanguages.languages
    ? data.skillsAndLanguages.languages.split(',').map((language, index) => ({
        name: language.trim(),
        proficiency: data.skillsAndLanguages.languageProficiency.split(',')[index] || 'N/A',
      }))
    : dummyData.skillsAndLanguages.languages.split(',').map((language, index) => ({
        name: language.trim(),
        proficiency: dummyData.skillsAndLanguages.languageProficiency.split(',')[index] || 'N/A',
      }));

  const workExperience = data.experience.workExperience.length > 0
    ? data.experience.workExperience
    : dummyData.experience.workExperience;

  const education = data.experience.education.length > 0
    ? data.experience.education
    : dummyData.experience.education;

  const contactInfo = data.personal.city || data.personal.email || data.personal.phone
    ? {
        city: data.personal.city,
        country: data.personal.country,
        postalCode: data.personal.postalCode,
        email: data.personal.email,
        phone: data.personal.phone,
      }
    : {
        city: dummyData.personal.city,
        country: dummyData.personal.country,
        postalCode: dummyData.personal.postalCode,
        email: dummyData.personal.email,
        phone: dummyData.personal.phone,
      };

  const professionalSummary = data.experience.professionalSummary || dummyData.experience.professionalSummary;

  return (
    <HomePageContainer>
      <ContentSection>
        {/* Name and Contact Section */}
        <NameSection>
          <NameContainer>
            <NameTitle>{data.personal.name || 'John Doe'}</NameTitle>
            <Profession>{data.personal.profession || 'Software Developer'}</Profession>
          </NameContainer>

          <ContactContainer>
            <ContactHeading>Address:</ContactHeading>
            <ContactInfo>{contactInfo.city || '123 Main Street'}, {contactInfo.country || 'Country'} — {contactInfo.postalCode || '12345'}</ContactInfo>
          </ContactContainer>

          <ContactContainer>
            <ContactHeading>Contact:</ContactHeading>
            <ContactInfo>{contactInfo.phone || '+123 456 7890'}</ContactInfo>
          </ContactContainer>

          <ContactContainer>
            <ContactHeading>Email:</ContactHeading>
            <ContactInfo>{contactInfo.email || 'john.doe@example.com'}</ContactInfo>
          </ContactContainer>
        </NameSection>

        {/* Professional Summary Section */}
        <SectionTitle>Professional Summary</SectionTitle>
        <SectionContent>{professionalSummary || 'Experienced software developer with expertise in React and TypeScript.'}</SectionContent>

        {/* Work History Section */}
        <SectionTitle>Work History</SectionTitle>
        {workExperience.length > 0 ? (
          workExperience.map((work, index) => (
            <div key={index}>
              <h3>{work.jobTitle}</h3>
              <p>
                {work.companyName} — {work.workCity}, {work.workState} | <em>{work.startDate} - {work.endDate}</em>
              </p>
              {work.workHistory.split('\n').map((task, idx) => (
                <ListItem key={idx}>
                  <IconWrapper>
                    <RiArrowRightDoubleLine />
                  </IconWrapper>
                  {task}
                </ListItem>
              ))}
            </div>
          ))
        ) : (
          <p>No work history available.</p>
        )}

        {/* Education Section */}
        <SectionTitle>Education</SectionTitle>
        {education.length > 0 ? (
          education.map((edu, index) => (
            <div key={index}>
              <p>{edu.degreeName}</p>
              <p>
                {edu.universityName} | <em>{edu.graduationYear}</em>
              </p>
            </div>
          ))
        ) : (
          <p>No education history available.</p>
        )}
      </ContentSection>

      {/* Skills and Languages Section */}
      <SkillsAndLanguagesContainer>
        <SideSection>
          <SectionTitle>Skills</SectionTitle>
          <List>
            {skillsWithLevel.length > 0 ? (
              skillsWithLevel.map((skill, index) => (
                <ListItem key={index}>
                  <IconWrapper>
                    <RiArrowRightDoubleLine />
                  </IconWrapper>
                  {skill.name} - {skill.level}
                </ListItem>
              ))
            ) : (
              <ListItem>No skills data available.</ListItem>
            )}
          </List>
        </SideSection>

        <SideSection>
          <SectionTitle>Languages</SectionTitle>
          <List>
            {languagesWithProficiency.length > 0 ? (
              languagesWithProficiency.map((language, index) => (
                <ListItem key={index}>
                  <IconWrapper>
                    <RiArrowRightDoubleLine />
                  </IconWrapper>
                  {language.name} - {language.proficiency}
                </ListItem>
              ))
            ) : (
              <ListItem>No languages data available.</ListItem>
            )}
          </List>
        </SideSection>
      </SkillsAndLanguagesContainer>
    </HomePageContainer>
  );
};

export default Template9;


// Styled components
const HomePageContainer = styled.div`
  font-family: 'Urbanist', sans-serif;
  margin: 0 auto;
  max-width: 750px;
  padding: 20px;
  background: #f5f5f5;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 114vh;
  border: 1px solid black;
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

const NameSection = styled.section`
  background: linear-gradient(to right, #23cd94, #bb9833); /* Gradient background */
  padding: 20px;
  color: white;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NameTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Profession = styled.h2`
  font-size: 1.1rem;
  margin: 0;
  font-weight: normal;
  color: #f0f0f0;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const ContactHeading = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: #f0f0f0;
  font-weight: bold;
  min-width: 100px;
`;

const ContactInfo = styled.p`
  font-size: 0.85rem;
  margin: 0;
  padding-left: 10px;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const SectionTitle = styled.h2`
  margin-top: 0;
  font-size: 1.2rem;
  color: #0a3d62;
  padding-bottom: 2px;
  margin-bottom: 8px;
`;

const SectionContent = styled.p`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 5px 0;
  margin-bottom: 5px;
  color: #333;
  position: relative;
  padding-left: 25px;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  color: #0a3d62;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;


const SideSection = styled.div`
  flex: 1;
`;

const SkillsAndLanguagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;