
import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { useCVContext } from '../Forms/FormContext';



const Tempalte3: React.FC = () => {
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
      <HeaderSection>
        <ProfileImageContainer>
          {data.personal.image ? (
            <ProfileImage src={URL.createObjectURL(data.personal.image)} alt="Profile" />
          ) : (
            <ProfileIcon />
          )}
        </ProfileImageContainer>
        <NameDetails>
          <h1>{data.personal.name}</h1>
          <p>{data.personal.profession}</p>
        </NameDetails>
      </HeaderSection>

      <LeftSection>
        {/* Professional Summary Section */}
        <Section>
          <RightSectionTitle>Professional Summary</RightSectionTitle>
          <p>{professionalSummary}</p>
        </Section>
        <SectionSeparator />

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
        <SectionSeparator />

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

      {/* Separator between Left and Right sections */}
      <Separator />

      <RightSection>
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
        <SectionSeparator />

        {/* Languages Section */}
        <LanguagesSection>
          <SectionTitle>Languages</SectionTitle>
          <List>
            {languagesWithProficiency.length > 0 ? (
              languagesWithProficiency.map((language, index) => (
                <ListItems key={index}>
                  {language.name} - {language.proficiency}
                </ListItems>
              ))
            ) : (
              <ListItems>No languages data available.</ListItems>
            )}
          </List>
        </LanguagesSection>

        {/* Contact Section */}
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
      </RightSection>
    </CVContainer>
  );
};

export default Tempalte3;

// Styled components
const CVContainer = styled.div`
  font-family: 'Urbanist', sans-serif;
  margin: 0 auto;
  max-width: 750px;
  padding: 10px;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  border: 1px solid black;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: linear-gradient(90deg, #f3d488 50%, #789ad1 50%);
  padding: 20px;
  border-bottom: 1px solid black;
  width: 100%;
  height: 140px;
`;

const ProfileImageContainer = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 3px solid #fff;
  background-color: #eee;
  margin-left:50px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileIcon = styled(CgProfile)`
  width: 100%;
  height: 100%;
  color: #e3e5e7;
`;

const NameDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-left:200px;
`;

const LeftSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: black;
  margin-top: 40px;
`;

const Section = styled.section`
  background: #fff;
  padding: 10px;
`;

const SectionTitle = styled.h2`
  margin-top: 20px;
  font-size: 1.2rem;
  color: black;
`;

const RightSectionTitle = styled.h2`
  margin-top: 0;
  font-size: 1.25rem;
  color: #0a3d62;
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
  position: relative;
  padding-left: 20px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #0a3d62; // Circle color
  }
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

const Separator = styled.div`
  width: 1px;
  background-color: #ddd;
`;

const SectionSeparator = styled.div`
  border-bottom: 1px solid #ddd;
  margin: 10px 0;
`;

const LanguagesSection = styled(Section)`
  background-color: #789ad1;
`;

const ContactSection = styled(Section)`
  background-color: #f3d488;
  height: 260px;
`;
const ListItems = styled.li`
  margin-bottom: 5px;
  line-height: 1.4;
  margin-left: 10px;
  color: white;
`;