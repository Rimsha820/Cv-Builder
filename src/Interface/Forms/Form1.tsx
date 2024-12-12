
import React from 'react';
import styled from 'styled-components';
import { useCVContext } from '../Forms/FormContext';



const Form: React.FC = () => {
  const { formData, setFormData } = useCVContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [name]: value }
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prev) => ({
      ...prev,
      personal: { ...prev.personal, image: file }
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic if needed
  };

  return (
    <FormContainer>
      <FormTitle>Fill your personal info there.</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.personal.name}
            onChange={handleChange}
            required
          />
        </FormField>
        <FlexContainer>
          <FormField>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.personal.email}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.personal.phone}
              onChange={handleChange}
              required
            />
          </FormField>
        </FlexContainer>
        <FormField>
          <Label htmlFor="profession">Profession</Label>
          <Input
            type="text"
            id="profession"
            name="profession"
            value={formData.personal.profession}
            onChange={handleChange}
            required
          />
        </FormField>
        <FlexContainer>
          <FormField>
            <Label htmlFor="city">City</Label>
            <Input
              type="text"
              id="city"
              name="city"
              value={formData.personal.city}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="country">Country</Label>
            <Input
              type="text"
              id="country"
              name="country"
              value={formData.personal.country}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="postalCode">Postal Code</Label>
            <Input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.personal.postalCode}
              onChange={handleChange}
              required
            />
          </FormField>
        </FlexContainer>
        <FormField>
          <Label htmlFor="image">Profile Image</Label>
          <Input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </FormField>
        <SubmitButton type="submit">Save</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default Form;
const FormContainer = styled.div`
  padding: 20px;
  margin-top: 50px;
  margin-left: 100px;
`;

const FormTitle = styled.h2`
  margin-bottom: 45px;
  margin-left: 25%;
  
`;

const FormField = styled.div`
  margin-bottom: 15px;
  flex: 1; 
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
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
const FlexContainer = styled.div`
  display: flex;
  gap: 40px; 
`;


