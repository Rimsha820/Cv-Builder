import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Education {
  degreeName: string;
  universityName: string;
  graduationYear: string;
}

interface WorkExperience {
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  workHistory: string;
  workCity: string;
  workState: string;
  workPostalCode: string;
}

interface CVFormData {
  personal: {
    name: string;
    email: string;
    phone: string;
    profession: string;
    city: string;
    country: string;
    postalCode: string;
    image: File | null;
  };
  experience: {
    workExperience: WorkExperience[];
    education: Education[];
    professionalSummary: string;
  };
  skillsAndLanguages: {
    skills: string;
    skillLevel: string;
    languages: string;
    languageProficiency: string;
  };
}

// Define the context properties
interface CVContextProps {
  formData: CVFormData;
  setFormData: React.Dispatch<React.SetStateAction<CVFormData>>;
  dummyData: CVFormData;
}

// Create a context with a default value of undefined
const CVContext = createContext<CVContextProps | undefined>(undefined);

// Provide the context to the component tree
export const CVProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Define default dummy data
  const defaultFormData: CVFormData = {
    personal: {
      name: '',
      email: '',
      phone: '',
      profession: '',
      city: '',
      country: '',
      postalCode: '',
      image: null,
      
    },
    experience: {
      workExperience: [], 
      education: [], 
      professionalSummary: '',
    },
    skillsAndLanguages: {
      skills: '',
      skillLevel: 'Beginner',
      languages: '',
      languageProficiency: 'Basic',
    },
  };

  // Example dummy data for templates
  const dummyData: CVFormData = {
    personal: {
      name: 'John Doe',
      email: 'email@example.com',
      phone: '+123 456 7890',
      profession: 'Web Developer',
      city: 'City',
      country: 'Country',
      postalCode: '12345',
      image: null,
    },
    experience: {
      workExperience: [
        {
          jobTitle: 'Web Developer',
          companyName: 'Tech Company',
          startDate: 'Jan 2020',
          endDate: 'Present',
          workHistory: 'Developing and maintaining web applications...',
          workCity: 'San Francisco',
          workState: 'CA',
          workPostalCode: '94105',
        },
        {
          jobTitle: 'Front-End Developer',
          companyName: 'Another Tech Company',
          startDate: 'Jun 2018',
          endDate: 'Dec 2019',
          workHistory: 'Worked on UI/UX for web applications...',
          workCity: 'Los Angeles',
          workState: 'CA',
          workPostalCode: '90001',
        },
        
      ],
      education: [
        {
          degreeName: 'Bachelor of Science in Computer Science',
          universityName: 'University of Tech',
          graduationYear: '2019',
        },
        {
          degreeName: 'Bachelor of Science in Computer Science',
          universityName: 'University of Tech',
          graduationYear: '2021',
        },
        
      ],
      professionalSummary: 'Highly motivated individual with a versatile skill set, including team collaboration, project management, and strong communication skills. Ready to bring valuable skills and enthusiasm to any role.',
    },
    skillsAndLanguages: {
      skills: 'JavaScript, React, Node.js, TypeScript',
      skillLevel: 'Intermediate',
      languages: 'English, Spanish, French',
      languageProficiency: 'Fluent in English, Intermediate in Spanish',
    },
  };

  const [formData, setFormData] = useState<CVFormData>(defaultFormData);

  return (
    <CVContext.Provider value={{ formData, setFormData, dummyData }}>
      {children}
    </CVContext.Provider>
  );
};

export const useCVContext = () => {
  const context = useContext(CVContext);
  if (context === undefined) {
    throw new Error('useCVContext must be used within a CVProvider');
  }
  return context;
};


