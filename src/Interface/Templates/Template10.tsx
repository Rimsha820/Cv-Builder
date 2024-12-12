import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useCVContext } from '../Forms/FormContext';


const Template10: React.FC = () => {
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
    <CVContainer>
      <LeftSection>
        {/* Name and Profession Section */}
        <NameSection>
          <h1>{data.personal.name}</h1>
          <p>{data.personal.profession}</p>
        </NameSection>

        {/* Skills Section */}
        <Section>
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
        </Section>

        {/* Languages Section */}
        <Section>
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
        </Section>

        {/* Contact Section */}
        <NoBottomBorderSection>
          <SectionTitle>Contact</SectionTitle>
          <ContactInfo>
            <ContactItem>
              <FaMapMarkerAlt />
              <p>{contactInfo.city}, {contactInfo.country} — {contactInfo.postalCode}</p>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <p>{contactInfo.email}</p>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <p>{contactInfo.phone}</p>
            </ContactItem>
          </ContactInfo>
        </NoBottomBorderSection>
      </LeftSection>

      <RightSection>
        {/* Professional Summary Section */}
        <Section>
          <RightSectionTitle>Professional Summary</RightSectionTitle>
          <p style={{ fontSize: '1.2rem' }}>{professionalSummary}</p>
        </Section>

        {/* Work History Section */}
        <Section>
          <RightSectionTitle>Work History</RightSectionTitle>
          {workExperience.length > 0 ? (
            workExperience.map((work, index) => (
              <div key={index}>
                <h3>{work.jobTitle}</h3>
                <p>
                  {work.companyName} — {work.workCity}, {work.workState} | <em>{work.startDate} - {work.endDate}</em>
                </p>
                {work.workHistory.split('\n').map((task, idx) => (
                  <ListItem key={idx}>{task}</ListItem>
                ))}
              </div>
            ))
          ) : (
            <p>No work history available.</p>
          )}
        </Section>

        {/* Education Section */}
        <NoBottomBorderSection>
          <RightSectionTitle>Education</RightSectionTitle>
          {education.length > 0 ? (
            education.map((edu, index) => (
              <div key={index}>
                <p>{edu.degreeName}</p>
                <p>
                  {edu.universityName} — {data.personal.city}, {data.personal.country} | <em>{edu.graduationYear}</em>
                </p>
              </div>
            ))
          ) : (
            <p>No education data available.</p>
          )}
        </NoBottomBorderSection>
      </RightSection>
    </CVContainer>
  );
};

export default Template10;


// Styled components
const CVContainer = styled.div`
  font-family: 'Urbanist', sans-serif;
  margin: 0 auto;
  max-width: 750px;
  padding: 10px;
  background: white; /* Changed to white background */
  color: #333;
  display: flex;
  gap: 15px;
  height: 100vh; /* Adjusted height */
  flex-wrap: wrap;
  border: 1px solid black;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #d2691e; /* Changed to Chocolate color */
  padding: 10px;
  color: white;
`;

const RightSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;


const Section = styled.section`
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd; /* Add a bottom border */
`;

const NoBottomBorderSection = styled(Section)`
  border-bottom: none; /* Remove bottom border */
`;

const SectionTitle = styled.h2`
  margin-top: 0;
  font-size: 1.2rem;
  color: white;
  margin-bottom: 10px;
`;

const RightSectionTitle = styled.h2`
  margin-top: 0;
  font-size: 1.25rem;
  color: #0a3d62;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.4;
  margin-left: 10px;
  position: relative;
  padding-left: 20px;
  &::before {
    content: '*';
    position: absolute;
    left: 0;
    color: #ffd700; 
    font-size: 1.5rem;
  }
`;

const ContactInfo = styled.div`
  line-height: 1.4;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const NameSection = styled.section`
  background: #8b4513; 
  padding: 20px;
  color: white;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;