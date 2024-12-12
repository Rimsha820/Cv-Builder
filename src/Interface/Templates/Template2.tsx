import React from 'react';
import styled from 'styled-components';
import { useCVContext } from '../Forms/FormContext';


const Tempalte2: React.FC = () => {
  const { formData, dummyData } = useCVContext();
  const data = formData.personal.name ? formData : dummyData;

  const skillsWithLevel = data.skillsAndLanguages.skills
    ? data.skillsAndLanguages.skills.split(',').map((skill, index) => ({
        name: skill.trim(),
        level: data.skillsAndLanguages.skillLevel.split(',')[index] || 'N/A',
      }))
    : [
        { name: 'No skills data available.', level: '' },
        ...dummyData.skillsAndLanguages.skills.split(',').map((skill, index) => ({
          name: skill.trim(),
          level: dummyData.skillsAndLanguages.skillLevel.split(',')[index] || 'N/A',
        })),
      ];

  const languagesWithProficiency = data.skillsAndLanguages.languages
    ? data.skillsAndLanguages.languages.split(',').map((language, index) => ({
        name: language.trim(),
        proficiency: data.skillsAndLanguages.languageProficiency.split(',')[index] || 'N/A',
      }))
    : [
        { name: 'No languages data available.', proficiency: '' },
        ...dummyData.skillsAndLanguages.languages.split(',').map((language, index) => ({
          name: language.trim(),
          proficiency: dummyData.skillsAndLanguages.languageProficiency.split(',')[index] || 'N/A',
        })),
      ];

  return (
    <HomePageContainer>
      <ContentSection>
        {/* Name and Contact Section */}
        <NameSection>
          <NameTitle>{data.personal.name || dummyData.personal.name}</NameTitle>
          
          <ContactContainer>
            <ContactHeading>Address:</ContactHeading>
            <ContactInfo>
              {data.personal.city || dummyData.personal.city}, {data.personal.country || dummyData.personal.country} — {data.personal.postalCode || dummyData.personal.postalCode}
            </ContactInfo>
          </ContactContainer>

          <ContactContainer>
            <ContactHeading>Contact:</ContactHeading>
            <ContactInfo>{data.personal.phone || dummyData.personal.phone}</ContactInfo>
          </ContactContainer>

          <ContactContainer>
            <ContactHeading>Email:</ContactHeading>
            <ContactInfo>{data.personal.email || dummyData.personal.email}</ContactInfo>
          </ContactContainer>
        </NameSection>

        <TimelineContainer>
          {/* Project Summary Section */}
          <TimelineItem>
            <TimelineContent>
              <SectionTitle>Project Summary</SectionTitle>
              <SectionContent>
                {data.experience.professionalSummary || dummyData.experience.professionalSummary}
              </SectionContent>
            </TimelineContent>
          </TimelineItem>

          {/* Skills Section */}
          <TimelineItem>
            <TimelineContent>
              <SectionTitle>Skills</SectionTitle>
              <List>
                {skillsWithLevel.length > 0 ? (
                  skillsWithLevel.map((skill, index) => (
                    <ListItem key={index}>{skill.name} - {skill.level}</ListItem>
                  ))
                ) : (
                  <ListItem>{dummyData.skillsAndLanguages.skills} - {dummyData.skillsAndLanguages.skillLevel}</ListItem>
                )}
              </List>
            </TimelineContent>
          </TimelineItem>

          {/* Work History Section */}
          <TimelineItem>
            <TimelineContent>
              <SectionTitle>Work History</SectionTitle>
              {data.experience.workExperience.length > 0 ? (
                data.experience.workExperience.map((work, index) => (
                  <div key={index}>
                    <h3 style={{fontSize:'0.8rem'}}>{work.jobTitle}</h3>
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
                <p>{dummyData.experience.workExperience.length > 0 ? (
                  dummyData.experience.workExperience.map((work, index) => (
                    <div key={index}>
                      <h3 style={{fontSize:'0.8rem'}}>{work.jobTitle}</h3>
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
                ) : 'No work history available.'}</p>
              )}
            </TimelineContent>
          </TimelineItem>

          {/* Education Section */}
          <TimelineItem>
            <TimelineContent>
              <SectionTitle>Education</SectionTitle>
              {data.experience.education.length > 0 ? (
                data.experience.education.map((edu, index) => (
                  <div key={index}>
                    <p>{edu.degreeName}</p>
                    <p>
                      {edu.universityName} | <em>{edu.graduationYear}</em>
                    </p>
                  </div>
                ))
              ) : (
                <p>{dummyData.experience.education.length > 0 ? (
                  dummyData.experience.education.map((edu, index) => (
                    <div key={index}>
                      <p>{edu.degreeName}</p>
                      <p>
                        {edu.universityName}  | <em>{edu.graduationYear}</em>
                      </p>
                    </div>
                  ))
                ) : 'No education data available.'}</p>
              )}
            </TimelineContent>
          </TimelineItem>

          {/* Languages Section */}
          <TimelineItem>
            <TimelineContent>
              <SectionTitle>Languages</SectionTitle>
              <List>
                {languagesWithProficiency.length > 0 ? (
                  languagesWithProficiency.map((language, index) => (
                    <ListItem key={index}>{language.name} - {language.proficiency}</ListItem>
                  ))
                ) : (
                  <ListItem>{dummyData.skillsAndLanguages.languages} - {dummyData.skillsAndLanguages.languageProficiency}</ListItem>
                )}
              </List>
            </TimelineContent>
          </TimelineItem>
        </TimelineContainer>
      </ContentSection>
    </HomePageContainer>
  );
};

export default Tempalte2;


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
  border: 1px solid black;
`;


const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NameSection = styled.section`
  background: #0a3d62;
  padding: 20px;
  color: white;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const NameTitle = styled.h1`
  font-size: 1.5rem;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
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
  font-size: 0.8rem;
  line-height: 1.4;

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
  font-size: 0.8rem;
  padding: 5px 0;
  margin-bottom: 5px;
  color: #333;
  position: relative;
  padding-left: 20px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: #0a3d62; 
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  padding: 20px 0;
  margin: 0;
  border-left: 3px solid #0a3d62;
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 50px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: '';
    position: absolute;
    left: -10px; 
    top: 0;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #0a3d62;
    border: 2px solid white; 
  }
`;


const TimelineContent = styled.div`
  padding-left: 10px;
  
`;