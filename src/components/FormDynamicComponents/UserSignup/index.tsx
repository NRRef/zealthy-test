'use client'

import React from 'react';
import { ErrorMessage, FormContainer, Input } from '../styles';
import { useFormContext } from '@/contexts';
import { RecordFormType } from '@/types';

export const validate = (formData: Record<string, RecordFormType>, updateFormMessages: (newData: Partial<Record<string, RecordFormType>>) => void):boolean => {
  let isValid: boolean = true;
  const validateEmail = (email: RecordFormType) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email as string);
  };
  updateFormMessages({email: null, password: null, confirmPassword: null, })
  if (!validateEmail(formData.email)) {
    updateFormMessages({email: 'Please enter a valid email address'})
    isValid = false;
  }

  if (String(formData.password).length < 8 || !formData.password) {
    updateFormMessages({password: 'Password must be at least 8 characters long'})
    isValid = false;
  }

  if (formData.password !== formData.confirmPassword) {
    updateFormMessages({confirmPassword: 'Passwords do not match'})
    isValid = false;
  }
  
  return isValid;
}

export const UserSignup: React.FC = () => {
  const { formData, updateFormData, formMessages } = useFormContext();

  return (
    <FormContainer>
      <Input
        type="email"
        placeholder="Email"
        value={formData.email as string || ''}
        onChange={(e) => updateFormData({ email: e.target.value })}
        required
      />
      {formMessages.email && <ErrorMessage>{formMessages.email as string}</ErrorMessage>}
      <Input
        type="password"
        placeholder="Password"
        value={formData.password as string || ''}
        onChange={(e) => updateFormData({ password: e.target.value })}
        required
      />
      {formMessages.password && <ErrorMessage>{formMessages.password as string}</ErrorMessage>}
      <Input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword as string || ''}
        onChange={(e) => updateFormData({ confirmPassword: e.target.value })}
        required
      />
      {formMessages.confirmPassword && <ErrorMessage>{formMessages.confirmPassword as string}</ErrorMessage>}
    </FormContainer>
  );
};