
import React from 'react';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { useCVContext } from '../Forms/FormContext'; 



const Template4: React.FC = () => {
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
      <NameSection>
        <h1>{data.personal.name}</h1>
        <p>{data.personal.profession}</p>
      </NameSection>

      <LeftSection>
        <Section>
          <RightSectionTitle>Professional Summary</RightSectionTitle>
          <p>{professionalSummary}</p>
        </Section>

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
        <ProfileImageContainer>
          {data.personal.image ? (
            <ProfileImage src={URL.createObjectURL(data.personal.image)} alt="Profile" />
          ) : (
            <ProfileIcon />
          )}
        </ProfileImageContainer>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          <List>
            {skillsWithLevel.length > 0 ? (
              skillsWithLevel.map((skill, index) => (
                <ListItem key={index}>
                  <ArrowIcon />
                  {skill.name} - {skill.level}
                </ListItem>
              ))
            ) : (
              <ListItem>No skills data available.</ListItem>
            )}
          </List>
        </Section>

        <Section>
          <SectionTitle>Languages</SectionTitle>
          <List>
            {languagesWithProficiency.length > 0 ? (
              languagesWithProficiency.map((language, index) => (
                <ListItem key={index}>
                  <ArrowIcon />
                  {language.name} - {language.proficiency}
                </ListItem>
              ))
            ) : (
              <ListItem>No languages data available.</ListItem>
            )}
          </List>
        </Section>

        <Section>
          <SectionTitle>Contact</SectionTitle>
          <ContactInfo>
            {contactInfo.city && (
              <ContactItem>
                <FaMapMarkerAlt />
                <p>{contactInfo.city}, {contactInfo.country} — {contactInfo.postalCode}</p>
              </ContactItem>
            )}
            {contactInfo.email && (
              <ContactItem>
                <FaEnvelope />
                <p>{contactInfo.email}</p>
              </ContactItem>
            )}
            {contactInfo.phone && (
              <ContactItem>
                <FaPhone />
                <p>{contactInfo.phone}</p>
              </ContactItem>
            )}
          </ContactInfo>
        </Section>
      </RightSection>
    </CVContainer>
  );
};

export default Template4;


// Styled components
const CVContainer = styled.div`
  font-family: 'Urbanist', sans-serif;
  margin: 0 auto;
  max-width: 750px; 
  padding: 10px; 
  background: white;
  color: black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  display: flex;
  gap: 20px;
  border:1px solid black;
  height:112vh;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 12px;
  color: black;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  border-radius: 12px;
  color: black;
  margin-top:0px;
`;

const ProfileImageContainer = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  border-radius: 50%; 
  overflow: hidden;
  border: 4px solid #fff; 
  background: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  margin: 0 auto;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileIcon = styled(CgProfile)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #ddd;
  background: #f0f0f0;
`;

const SectionTitle = styled.h2`
  margin-top: 0;
  font-size: 1.3rem;
  color: black;
  border-bottom: 2px solid #ddd;
  padding-bottom: 5px;
  margin-top: 30px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
  line-height: 1.4;
  margin-left: 1px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ArrowIcon = styled(IoArrowForwardOutline)`
  color: #bf2720;
`;

const ContactInfo = styled.div`
  line-height: 1.4;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const NameSection = styled.header`
  background: linear-gradient(to right, #e55c55 , #8a1e19);
  padding: 15px;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  height:110vh;
`;

const Section = styled.section`
  background: white;
  padding: 15px;  
  border-radius: 12px;
`;

const RightSectionTitle = styled.h2`
  margin-top: 0;
  font-size: 1.3rem;
  color: #0a3d62;
  border-bottom: 2px solid #ddd;  
`;