import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { useCVContext } from '../Forms/FormContext';


const Template7: React.FC = () => {
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
        phone: data.personal.phone
      }
    : {
        city: dummyData.personal.city,
        country: dummyData.personal.country,
        postalCode: dummyData.personal.postalCode,
        email: dummyData.personal.email,
        phone: dummyData.personal.phone
      };

  const professionalSummary = data.experience.professionalSummary || dummyData.experience.professionalSummary;

  return (
    <CVContainer>
      <LeftSection>
        {/* Name Section */}
        <NameSection>
          <h1>{data.personal.name}</h1>
          <p>{data.personal.profession}</p>
        </NameSection>

        {/* Professional Summary Section */}
        <Section>
          <RightSectionTitle>Professional Summary</RightSectionTitle>
          <p>{professionalSummary}</p>
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
        </Section>

        {/* Education Section */}
        <Section>
          <RightSectionTitle>Education</RightSectionTitle>
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
            <p>No education data available.</p>
          )}
        </Section>
      </LeftSection>

      <RightSection>
        {/* Profile Image Section */}
        <ProfileImageContainer>
          {data.personal.image ? (
            <ProfileImage src={URL.createObjectURL(data.personal.image)} alt="Profile" />
          ) : (
            <ProfileIcon />
          )}
        </ProfileImageContainer>

        {/* Contact Section */}
        <Sections>
          <RightSectionTitle>Contact</RightSectionTitle>
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
        </Sections>

        {/* Skills Section */}
        <Sections>
          <RightSectionTitle>Skills</RightSectionTitle>
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
        </Sections>

        {/* Languages Section */}
        <Sections>
          <RightSectionTitle>Languages</RightSectionTitle>
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
        </Sections>
      </RightSection>
    </CVContainer>
  );
};

export default Template7;


// Styled components
const CVContainer = styled.div`
  font-family: 'Urbanist', sans-serif;
  margin: 0 auto;
  max-width: 750px; 
  padding: 10px; 
  background: white;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  display: flex;
  gap: 15px; 
  height: 100vh;
  flex-wrap: wrap; 
  border: 1px solid black;
`;

const LeftSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px; 
  margin-top: 10px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px; 
  padding: 10px; 
  border-radius: 8px;
  color: white;
  background: linear-gradient(135deg, #b930b9 , #ea53ea ); 
`;

const ProfileImageContainer = styled.div`
  width: 80%; 
  padding-top: 80%; 
  position: relative;
  border-radius: 8px; 
  border: 3px solid #fff; 
  background: #f0f0f0;
  margin-top:20px;
  margin-left:20px;
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 80%;
  object-fit: cover; 
  border-radius: 8px; 
  margin-top:20px;
  margin-left:20px;
`;

const ProfileIcon = styled(CgProfile)`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 80%;
  color: #dddee0;
  background: #f0f0f0;
  border-radius: 8px; 
  margin-top:20px;
  margin-left:20px;
`;

const Section = styled.section`
  background: white;
  padding: 10px; 
  border-radius: 6px;
`;

const Sections = styled.section`
  padding: 10px; 
  background: linear-gradient(135deg, #b930b9 , #ea53ea ); 
`;

const RightSectionTitle = styled.h2`
  margin-top: 0;
  font-size: 1.25rem;
  color: black;
  border-bottom: 1px solid gray; 
  padding-bottom: 3px; 
  margin-bottom: 10px; 
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 5px; 
  line-height: 1.4; 
  margin-left: 10px;
  color: black;
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
  color: black;
`;

const NameSection = styled.section`
  background: #fff;
  padding: 20px;
  color: #0a3d62;
  border-radius: 6px;
  border-bottom: 2px solid gray;
`;