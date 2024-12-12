// context/TemplateContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type TemplateContextType = {
  selectedTemplate: number | null;
  setSelectedTemplate: (template: number | null) => void;
};

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export const TemplateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  return (
    <TemplateContext.Provider value={{ selectedTemplate, setSelectedTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplate = () => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error('useTemplate must be used within a TemplateProvider');
  }
  return context;
};
