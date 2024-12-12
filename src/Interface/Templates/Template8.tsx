import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { useCVContext } from '../Forms/FormContext';



const Tempalte8: React.FC = () => {
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
    <Container>
      <MainContent>
        <LeftColumn>
          <NameSection>
            <Name>{data.personal.name}</Name>
            <Profession>{data.personal.profession}</Profession>
          </NameSection>
          <ProfileImageContainer>
            {data.personal.image ? (
              <ProfileImage src={URL.createObjectURL(data.personal.image)} alt="Profile" />
            ) : (
              <ProfileIcon />
            )}
          </ProfileImageContainer>
          <SectionTitles>Contact</SectionTitles>
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
          <Separator />
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
        </LeftColumn>

        {/* Timeline between the columns */}
        <Timeline>
          <TimelineMarkerTop />
          <TimelineMarkerMid />
          <TimelineMarkerBottom />
        </Timeline>

        <Column>
          {/* Professional Summary Section */}
          <SectionTitle>Professional Summary</SectionTitle>
          <p>{professionalSummary}</p>
          <Separator />

          {/* Work History Section */}
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
            <p>No education data available.</p>
          )}
        </Column>
      </MainContent>
    </Container>
  );
};

export default Tempalte8;


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
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  position: relative;
`;

const Column = styled.div`
  width: 48%;
`;

const LeftColumn = styled(Column)`
  display: flex;
  flex-direction: column;
`;

const NameSection = styled.div`
  background-color: #ecd590; 
  padding: 15px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 10px;
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
  border-radius: 50%;
  margin-top: 40px;
  background: #f2f2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid gray;
  margin-left:70px;
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
  color: #e1dde1;
`;

const SectionTitle = styled.h3`
  margin-top: 50px;
  font-size: 1.4rem;
  color: black;
`;

const SectionTitles = styled.h3`
  margin-top: 50px;
  font-size: 1.4rem;
  color: black;
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

const Timeline = styled.div`
  width: 2px;
  background-color: #4a90e2;
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  margin-left: -1px;
  z-index: 1;
`;

const TimelineMarker = styled.div`
  width: 10px;
  height: 10px;
  background-color: #4a90e2;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

const TimelineMarkerTop = styled(TimelineMarker)`
  top: 20px;
`;

const TimelineMarkerMid = styled(TimelineMarker)`
  top: 50%;
  transform: translate(-50%, -50%);
`;

const TimelineMarkerBottom = styled(TimelineMarker)`
  bottom: 20px;
`;