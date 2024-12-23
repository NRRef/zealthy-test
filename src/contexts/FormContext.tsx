import { RecordFormType, StepConfig } from '@/types';
import React, { createContext, useContext, useState } from 'react';

interface FormContextType {
  formData: Record<string, RecordFormType>;
  updateFormData: (newData: Partial<Record<string, RecordFormType>>) => void;
  formMessages: Record<string, RecordFormType>;
  updateFormMessages: (newData: Partial<Record<string, RecordFormType>>) => void;
  validateStep: (index: number) => boolean;
  steps: StepConfig[];
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export const FormProvider: React.FC<{ children: React.ReactNode; steps: StepConfig[] }> = ({ children, steps }) => {
  const [formData, setFormData] = useState<Record<string, RecordFormType>>({});
  const [formMessages, setFormMessages] = useState<Record<string, RecordFormType>>({});

  const updateFormData = (newData: Partial<Record<string, RecordFormType>>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const updateFormMessages = (newData: Partial<Record<string, RecordFormType>>) => {
    setFormMessages(prev => ({ ...prev, ...newData }));
  };

  const validateStep = (index: number) => {
    if (index >= 0 && index < steps.length) {
      const validationResults = steps[index].components.map(item=>item.validate(formData, updateFormMessages))
      return !validationResults.includes(false)
    }
    return false;
  };
  return (
    <FormContext.Provider value={{ formData, updateFormData, formMessages, updateFormMessages, validateStep, steps }}>
      {children}
    </FormContext.Provider>
  );
};