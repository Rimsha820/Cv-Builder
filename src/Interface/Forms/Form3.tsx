import React, { useState } from 'react';
import styled from 'styled-components';
import { useCVContext } from '../Forms/FormContext';



const Form3: React.FC = () => {
  const { formData, setFormData } = useCVContext();
  const [skills, setSkills] = useState([{ name: formData.skillsAndLanguages.skills.split(',')[0] || '', level: '' }]);
  const [languages, setLanguages] = useState([{ name: formData.skillsAndLanguages.languages.split(',')[0] || '', proficiency: '' }]);

  const handleSkillChange = (index: number, field: string, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = { ...updatedSkills[index], [field]: value };
    setSkills(updatedSkills);
    setFormData(prev => ({
      ...prev,
      skillsAndLanguages: {
        ...prev.skillsAndLanguages,
        skills: updatedSkills.map(skill => skill.name).join(','),
        skillLevel: updatedSkills.map(skill => skill.level).join(',')
      }
    }));
  };

  const handleLanguageChange = (index: number, field: string, value: string) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index] = { ...updatedLanguages[index], [field]: value };
    setLanguages(updatedLanguages);
    setFormData(prev => ({
      ...prev,
      skillsAndLanguages: {
        ...prev.skillsAndLanguages,
        languages: updatedLanguages.map(language => language.name).join(','),
        languageProficiency: updatedLanguages.map(language => language.proficiency).join(',')
      }
    }));
  };

  const addSkill = () => setSkills([...skills, { name: '', level: '' }]);
  const removeSkill = (index: number) => setSkills(skills.filter((_, i) => i !== index));
  const addLanguage = () => setLanguages([...languages, { name: '', proficiency: '' }]);
  const removeLanguage = (index: number) => setLanguages(languages.filter((_, i) => i !== index));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic if needed
  };

  return (
    <FormContainer>
      <FormTitle>Provide your skills and languages.</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="skills">Skills</Label>
          {skills.map((skill, index) => (
            <div key={index} style={{ marginBottom: '15px' }}>
              <Input
                type="text"
                placeholder="Skill"
                value={skill.name}
                onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                required
              />
              <Select
                value={skill.level}
                onChange={(e) => handleSkillChange(index, 'level', e.target.value)}
                required
              >
                <option value="">Select Skill Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </Select>
              {skills.length > 1 && (
                <RemoveButton type="button" onClick={() => removeSkill(index)}>Remove Skill</RemoveButton>
              )}
            </div>
          ))}
          <Button type="button" onClick={addSkill}>+ Add Skill</Button>
        </FormField>

        <FormField>
          <Label htmlFor="languages">Languages</Label>
          {languages.map((language, index) => (
            <div key={index} style={{ marginBottom: '15px' }}>
              <Input
                type="text"
                placeholder="Language"
                value={language.name}
                onChange={(e) => handleLanguageChange(index, 'name', e.target.value)}
                required
              />
              <Select
                value={language.proficiency}
                onChange={(e) => handleLanguageChange(index, 'proficiency', e.target.value)}
                required
              >
                <option value="">Select Language Proficiency</option>
                <option value="Basic">Basic</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Fluent">Fluent</option>
              </Select>
              {languages.length > 1 && (
                <RemoveButton type="button" onClick={() => removeLanguage(index)}>Remove Language</RemoveButton>
              )}
            </div>
          ))}
          <Button type="button" onClick={addLanguage}>+ Add Language</Button>
        </FormField>
        <SaveButton type="submit">Save</SaveButton>
      </form>
    </FormContainer>
  );
};

export default Form3;

const FormContainer = styled.div`
  padding: 20px;
  margin-top: 50px;
  margin-left: 100px;
`;

const FormTitle = styled.h2`
  margin-bottom: 45px;
  text-align: center;
`;

const FormField = styled.div`
  margin-bottom: 20px; 
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const sharedInputStyles = `
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Input = styled.input`
  ${sharedInputStyles}
`;

const Select = styled.select`
  ${sharedInputStyles}
  background-color: white;
`;

const Button = styled.button`
  padding: 10px 20px;
    background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 5px;

  &:hover {
    text-decoration: underline;
  }
`;
const SaveButton = styled.button`
 padding: 12px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 330px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

