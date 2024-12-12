import React from 'react';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useCVContext } from '../Forms/FormContext';



const Template1: React.FC = () => {
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
        <LeftSectionBox>
          <ProfileImageContainer>
            {data.personal.image ? (
              <ProfileImage src={URL.createObjectURL(data.personal.image)} alt="Profile" />
            ) : (
              <ProfileIcon />
            )}
          </ProfileImageContainer>
        </LeftSectionBox>

        <LeftSectionBox>
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
        </LeftSectionBox>

        <LeftSectionBox>
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
        </LeftSectionBox>

        <LeftSectionBox>
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
        </LeftSectionBox>
      </LeftSection>

      <RightSection>
        <NameSection>
          <h1>{data.personal.name}</h1>
          <p>{data.personal.profession}</p>
        </NameSection>

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
                {work.workHistory.split('\n').map((task, idx) => (
                  <ListItem key={idx}>{task}</ListItem>
                ))}
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
                  {edu.universityName} — {data.personal.city}, {data.personal.country} | <em>{edu.graduationYear}</em>
                </p>
              </div>
            ))
          ) : (
            <p>No education data available.</p>
          )}
        </Section>
      </RightSection>
    </CVContainer>
  );
};

export default Template1;

const CVContainer = styled.div`
  font-family: 'Urbanist', sans-serif;
  margin: 0 auto;
  max-width: 750px;
  padding: 10px;
  background: #f5f5f5;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 15px;
  height: 105vh;
  flex-wrap: wrap;
  border: 1px solid black;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #0a3d62;
  padding: 10px;
  border-radius: 8px;
  color: white;
`;

const RightSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

const ProfileImageContainer = styled.div`
  width: 85%;
  padding-top: 80%;
  position: relative;
  border-radius: 8px;
  border: 3px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: #f0f0f0;
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const ProfileIcon = styled(CgProfile)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #dddee0;
  background: #f0f0f0;
  border-radius: 8px;
`;

const Section = styled.section`
  background: #fff;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const LeftSectionBox = styled.section`
  background: #0a3d62;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  color: white;
`;

const SectionTitle = styled.h2`
  margin-top: 0;
  font-size: 1.5rem;
  color: white;
  border-bottom: 1px solid #ddd;
  padding-bottom: 3px;
  margin-bottom: 10px;
`;

const RightSectionTitle = styled.h2`
  margin-top: 0;
  font-size: 1.5rem;
  color: #0a3d62;
  border-bottom: 1px solid #ddd;
  padding-bottom: 3px;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
  line-height: 1.4;
  margin-left: 10px;
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
  background: #fff;
  padding: 20px;
  color: #0a3d62;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;