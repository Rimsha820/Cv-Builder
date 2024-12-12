import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useCVContext } from '../Forms/FormContext'; 



const Template6: React.FC = () => {
  const { formData, dummyData } = useCVContext();
  const data = formData.personal.name ? formData : dummyData;

  // Extracting relevant data
  const contactInfo = {
    city: data.personal.city || 'City',
    country: data.personal.country || 'Country',
    postalCode: data.personal.postalCode || 'Postal Code',
    email: data.personal.email || 'email@example.com',
    phone: data.personal.phone || '+123 456 7890'
  };

  const professionalSummary = data.experience.professionalSummary || 'Highly motivated individual with a versatile skill set, including team collaboration, project management, and strong communication skills. Ready to bring valuable skills and enthusiasm to any role.';

  const workExperience = data.experience.workExperience.length > 0 ? data.experience.workExperience : [
    {
      jobTitle: 'Office Assistant',
      companyName: 'ABC Company',
      workCity: 'City',
      workState: 'State',
      startDate: 'Jan 2020',
      endDate: 'Present',
      workHistory: 'Assisted in organizing office operations and procedures.\nMaintained a clean and safe working environment.\nManaged communication between departments.\nProvided administrative support to managers and executives.'
    },
    {
      jobTitle: 'Sales Associate',
      companyName: 'XYZ Store',
      workCity: 'City',
      workState: 'State',
      startDate: 'Jun 2018',
      endDate: 'Dec 2019',
      workHistory: 'Provided excellent customer service.\nManaged inventory and restocked shelves.\nHandled cash transactions and sales.'
    }
  ];

  const education = data.experience.education.length > 0 ? data.experience.education : [
    { degreeName: 'Bachelor of Arts in Communication', universityName: 'University of Somewhere', graduationYear: '2017' },
    { degreeName: 'Masters in BS CS', universityName: 'University of Somewhere', graduationYear: '2019' }
  ];

  const skillsWithLevel = data.skillsAndLanguages.skills
    ? data.skillsAndLanguages.skills.split(',').map((skill, index) => ({
        name: skill.trim(),
        level: data.skillsAndLanguages.skillLevel.split(',')[index] || 'N/A',
      }))
    : [
      { name: 'Team Collaboration', level: 'N/A' },
      { name: 'Project Management', level: 'N/A' },
      { name: 'Time Management', level: 'N/A' },
      { name: 'Communication Skills', level: 'N/A' },
      { name: 'Problem-Solving', level: 'N/A' },
      { name: 'Critical Thinking', level: 'N/A' }
    ];

  const languagesWithProficiency = data.skillsAndLanguages.languages
    ? data.skillsAndLanguages.languages.split(',').map((language, index) => ({
        name: language.trim(),
        proficiency: data.skillsAndLanguages.languageProficiency.split(',')[index] || 'N/A',
      }))
    : [
      { name: 'English', proficiency: 'Fluent' },
      { name: 'Spanish', proficiency: 'Conversational' },
      { name: 'French', proficiency: 'Basic' }
    ];

  return (
    <Container>
      <Header>
        <Name>{data.personal.name || 'John Doe'}</Name>
        <Profession>{data.personal.profession || 'Software Engineer'}</Profession>
        <Separator />
      </Header>
      <MainContent>
        <LeftColumn>
          <SectionTitle>Languages</SectionTitle>
          <List>
            {languagesWithProficiency.map((language, index) => (
              <ListItem key={index}>{language.name} ({language.proficiency})</ListItem>
            ))}
          </List>
          <SectionTitles>Skills</SectionTitles>
          <List>
            {skillsWithLevel.map((skill, index) => (
              <ListItem key={index}>{skill.name} - {skill.level}</ListItem>
            ))}
          </List>
          <ContactSection>
            <ContactTitle>Contact</ContactTitle>
            <ContactInfo>
              <FaMapMarkerAlt style={{ marginRight: '10px', color: 'black' }} />
              {contactInfo.city}, {contactInfo.country} — {contactInfo.postalCode}
            </ContactInfo>
            <ContactInfo>
              <FaEnvelope style={{ marginRight: '10px', color: 'black' }} />
              {contactInfo.email}
            </ContactInfo>
            <ContactInfo>
              <FaPhoneAlt style={{ marginRight: '10px', color: 'black' }} />
              {contactInfo.phone}
            </ContactInfo>
          </ContactSection>
        </LeftColumn>
        <RightColumn>
          <SectionTitle>Professional Summary</SectionTitle>
          <p>{professionalSummary}</p>
          <SectionTitle>Experience</SectionTitle>
          <List>
            {workExperience.map((work, index) => (
              <div key={index}>
                <h3>{work.jobTitle}</h3>
                <p>
                  {work.companyName} — {work.workCity}, {work.workState} | <em>{work.startDate} – {work.endDate}</em>
                </p>
                <List>
                  {work.workHistory.split('\n').map((task, idx) => (
                    <ListItem key={idx}>{task}</ListItem>
                  ))}
                </List>
              </div>
            ))}
          </List>
          <SectionTitle>Education</SectionTitle>
          <List>
            {education.map((edu, index) => (
              <ListItem key={index}>
                {edu.degreeName} — {edu.universityName} | {edu.graduationYear}
              </ListItem>
            ))}
          </List>
        </RightColumn>
      </MainContent>
    </Container>
  );
};

export default Template6;

const Container = styled.div`
  font-family: 'Urbanist', sans-serif;
  margin: auto;
  padding: 20px;
  background: #FFFFFF;
  width: 700px;
  border: 1px solid black;
`;

const Header = styled.header`
  background: white;
  color: black;
  text-align: center;
  position: relative;
  border-bottom: 2px solid black; /* Full-width border */
`;

const Name = styled.h1`
  margin: 0;
  font-size: 36px;
  font-family: 'Merriweather', serif;
`;

const Profession = styled.h2`
  margin: 10px 0 0;
  font-size: 24px;
  font-family: 'Merriweather', serif;
  font-weight: 400;
`;

const Separator = styled.div`
  background: #f0c91b;
  height: 4px;
  width: 80px;
  margin: 20px auto;
  border-radius: 2px;
`;

const MainContent = styled.div`
  display: flex;
  margin-top: 20px;
`;

const LeftColumn = styled.div`
  width: 30%;
  padding: 20px;
  background: #F9F9F9;
  border-right: 1px solid #E0E0E0;
`;

const RightColumn = styled.div`
  width: 70%;
  padding: 20px;
`;

const SectionTitle = styled.h3`
  margin-top: 30px;
  font-size: 1.4rem;
  color: #2E2E2E;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
`;

const SectionTitles = styled.h3`
  margin-top: 50px;
  font-size: 1.4rem;
  color: #2E2E2E;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 20px; 
  color: #2E2E2E;
`;

const ContactSection = styled.div`
  margin-top: 20px;
`;

const ContactTitle = styled.h3`
  margin-top: 50px;
  font-size: 1.4rem;
  color: #2E2E2E;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  color: #2E2E2E;
  margin-bottom: 25px; 
`;