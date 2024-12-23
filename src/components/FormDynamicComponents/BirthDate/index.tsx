'use client'

import React from 'react';
import { FormContainer, Input, ErrorMessage } from '../styles';
import { useFormContext } from '@/contexts';
import { RecordFormType } from '@/types';

export const validate = (formData: Record<string, RecordFormType>, updateFormMessages: (newData: Partial<Record<string, RecordFormType>>) => void): boolean => {
  let isValid = true;
  
  updateFormMessages({ birthday: null });

  if (!formData.birthday) {
    updateFormMessages({ birthday: 'Date of birth is required' });
    isValid = false;
  }
  
  return isValid;
};

export const BirthDate: React.FC = () => {
  const { formData, updateFormData, formMessages } = useFormContext();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ birthday: e.target.value });
  };

  return (
    <FormContainer>
      <Input
        type="date"
        placeholder="Date of Birth"
        value={formData.birthday as string || ''}
        onChange={handleDateChange}
        required
      />
      {formMessages.birthday && <ErrorMessage>{formMessages.birthday as string}</ErrorMessage>}
    </FormContainer>
  );
};