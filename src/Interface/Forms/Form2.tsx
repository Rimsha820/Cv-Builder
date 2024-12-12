import React, { useState } from 'react';
import styled from 'styled-components';
import { useCVContext } from '../Forms/FormContext';


const Form2: React.FC = () => {
  const { formData, setFormData } = useCVContext();
  const [workExperiences, setWorkExperiences] = useState(
    formData.experience.workExperience.length > 0 ? [...formData.experience.workExperience] : [{ jobTitle: '', companyName: '', startDate: '', endDate: '', workHistory: '', workCity: '', workState: '', workPostalCode: '' }]
  );
  const [education, setEducation] = useState(
    formData.experience.education.length > 0 ? [...formData.experience.education] : [{ degreeName: '', universityName: '', graduationYear: '' }]
  );
  const [professionalSummary, setProfessionalSummary] = useState(
    formData.experience.professionalSummary || ''
  );

  const handleWorkExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedWorkExperiences = [...workExperiences];
    updatedWorkExperiences[index] = { ...updatedWorkExperiences[index], [name]: value };
    setWorkExperiences(updatedWorkExperiences);
    setFormData(prev => ({
      ...prev,
      experience: { ...prev.experience, workExperience: updatedWorkExperiences }
    }));
  };

  const addWorkExperienceField = () => {
    setWorkExperiences(prev => {
      const updatedWorkExperiences = [...prev, { jobTitle: '', companyName: '', startDate: '', endDate: '', workHistory: '', workCity: '', workState: '', workPostalCode: '' }];
      setFormData(prevFormData => ({
        ...prevFormData,
        experience: { ...prevFormData.experience, workExperience: updatedWorkExperiences }
      }));
      return updatedWorkExperiences;
    });
  };

  const removeWorkExperienceField = (index: number) => {
    setWorkExperiences(prev => {
      const updatedWorkExperiences = prev.filter((_, i) => i !== index);
      setFormData(prevFormData => ({
        ...prevFormData,
        experience: { ...prevFormData.experience, workExperience: updatedWorkExperiences }
      }));
      return updatedWorkExperiences;
    });
  };

  const handleEducationChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index], [name]: value };
    setEducation(updatedEducation);
    setFormData(prev => ({
      ...prev,
      experience: { ...prev.experience, education: updatedEducation }
    }));
  };

  const addEducationField = () => {
    setEducation(prev => {
      const updatedEducation = [...prev, { degreeName: '', universityName: '', graduationYear: '' }];
      setFormData(prevFormData => ({
        ...prevFormData,
        experience: { ...prevFormData.experience, education: updatedEducation }
      }));
      return updatedEducation;
    });
  };

  const removeEducationField = (index: number) => {
    setEducation(prev => {
      const updatedEducation = prev.filter((_, i) => i !== index);
      setFormData(prevFormData => ({
        ...prevFormData,
        experience: { ...prevFormData.experience, education: updatedEducation }
      }));
      return updatedEducation;
    });
  };

  const handleProfessionalSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setProfessionalSummary(value);
    setFormData(prev => ({
      ...prev,
      experience: { ...prev.experience, professionalSummary: value }
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic if needed
  };

  return (
    <FormContainer>
      <FormTitle>Enter your Experience, Education, and Professional Summary</FormTitle>
      <form onSubmit={handleSubmit}>
        {workExperiences.map((workExperience, index) => (
          <WorkExperienceContainer key={index}>
            <FlexContainer>
              <FormField>
                <Label htmlFor={`jobTitle-${index}`}>Job Title</Label>
                <Input
                  id={`jobTitle-${index}`}
                  name="jobTitle"
                  type="text"
                  value={workExperience.jobTitle}
                  onChange={(e) => handleWorkExperienceChange(index, e)}
                  required
                />
              </FormField>
              <FormField>
                <Label htmlFor={`companyName-${index}`}>Company Name</Label>
                <Input
                  id={`companyName-${index}`}
                  name="companyName"
                  type="text"
                  value={workExperience.companyName}
                  onChange={(e) => handleWorkExperienceChange(index, e)}
                  required
                />
              </FormField>
            </FlexContainer>
            <FlexContainer>
              <FormField>
                <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                <Input
                  id={`startDate-${index}`}
                  name="startDate"
                  type="date"
                  value={workExperience.startDate}
                  onChange={(e) => handleWorkExperienceChange(index, e)}
                  required
                />
              </FormField>
              <FormField>
                <Label htmlFor={`endDate-${index}`}>End Date</Label>
                <Input
                  id={`endDate-${index}`}
                  name="endDate"
                  type="date"
                  value={workExperience.endDate}
                  onChange={(e) => handleWorkExperienceChange(index, e)}
                  required
                />
              </FormField>
            </FlexContainer>
            <FormField>
              <Label htmlFor={`workHistory-${index}`}>Work History</Label>
              <TextArea
                id={`workHistory-${index}`}
                name="workHistory"
                value={workExperience.workHistory}
                onChange={(e) => handleWorkExperienceChange(index, e)}
                required
              />
            </FormField>
            <FlexContainer>
              <FormField>
                <Label htmlFor={`workCity-${index}`}>Work City</Label>
                <Input
                  id={`workCity-${index}`}
                  name="workCity"
                  type="text"
                  value={workExperience.workCity}
                  onChange={(e) => handleWorkExperienceChange(index, e)}
                />
              </FormField>
              <FormField>
                <Label htmlFor={`workState-${index}`}>Work State</Label>
                <Input
                  id={`workState-${index}`}
                  name="workState"
                  type="text"
                  value={workExperience.workState}
                  onChange={(e) => handleWorkExperienceChange(index, e)}
                />
              </FormField>
        
            </FlexContainer>
            {workExperiences.length > 1 && (
              <RemoveButton type="button" onClick={() => removeWorkExperienceField(index)}>
                Remove Work Experience
              </RemoveButton>
            )}
          </WorkExperienceContainer>
        ))}
        <AddButton type="button" onClick={addWorkExperienceField}>+ Add Another Work Experience</AddButton>

        <FormField>
          <Label htmlFor="professionalSummary">Professional Summary</Label>
          <TextArea
            id="professionalSummary"
            name="professionalSummary"
            value={professionalSummary}
            onChange={handleProfessionalSummaryChange}
          />
        </FormField>

        {education.map((edu, index) => (
          <FormField key={index}>
            <FlexContainer>
              <FormField>
                <Label htmlFor={`degreeName-${index}`}>Degree Name</Label>
                <Input
                  id={`degreeName-${index}`}
                  name="degreeName"
                  type="text"
                  value={edu.degreeName}
                  onChange={(e) => handleEducationChange(index, e)}
                  required
                />
              </FormField>
              <FormField>
                <Label htmlFor={`universityName-${index}`}>University Name</Label>
                <Input
                  id={`universityName-${index}`}
                  name="universityName"
                  type="text"
                  value={edu.universityName}
                  onChange={(e) => handleEducationChange(index, e)}
                  required
                />
              </FormField>
              <FormField>
                <Label htmlFor={`graduationYear-${index}`}>Graduation Year</Label>
                <Input
                  id={`graduationYear-${index}`}
                  name="graduationYear"
                  type="text"
                  value={edu.graduationYear}
                  onChange={(e) => handleEducationChange(index, e)}
                  required
                />
              </FormField>
            </FlexContainer>
            {education.length > 1 && (
              <RemoveButton type="button" onClick={() => removeEducationField(index)}>
                Remove Education
              </RemoveButton>
            )}
          </FormField>
        ))}
        <AddButton type="button" onClick={addEducationField}>+ Add Another Education</AddButton>

        <SubmitButton type="submit">Save</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default Form2;

const FormContainer = styled.div`
  padding: 20px;
  margin-top: 30px;
  margin-left: 100px;
`;

const FormTitle = styled.h2`
  margin-bottom: 45px;
  text-align: center;
`;

const FormField = styled.div`
  margin-bottom: 5px;
  flex: 1;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 12px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 410px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const WorkExperienceContainer = styled.div`
  margin-bottom: 20px;
`;

const AddButton = styled.button`
  padding: 8px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom:10px;

  &:hover {
    background-color: #218838;
  }
`;

const RemoveButton = styled.button`
  color: red;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  font-size: 0.8rem;

  }
`;
