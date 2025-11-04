
// contexts/FormContext.tsx
'use client'

import React, { ReactNode, createContext, useContext, useRef } from 'react';

interface FormContextType {
  submitForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode; onSubmit: () => void }> = ({ 
  children, 
  onSubmit 
}) => {
  const submitForm = () => {
    onSubmit();
  };

  return (
    <FormContext.Provider value={{ submitForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};