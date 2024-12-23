'use client'

import React from 'react';
import { FormContainer, Input, ErrorMessage } from '../styles';
import { useFormContext } from '@/contexts';
import { RecordFormType } from '@/types';

export const validate = (formData: Record<string, RecordFormType>, updateFormMessages: (newData: Partial<Record<string, RecordFormType>>) => void): boolean => {
  let isValid = true;
  const fields = ['streetAddress', 'city', 'state', 'zipCode'];
  
  updateFormMessages({
    streetAddress: null,
    city: null,
    state: null,
    zipCode: null,
  });

  fields.forEach(field => {
    if (!formData[field]) {
      updateFormMessages({ [field]: `${field.charAt(0).toUpperCase() + field.slice(1)} is required` });
      isValid = false;
    }
  });

  return isValid;
};

export const Address: React.FC = () => {
  const { formData, updateFormData, formMessages } = useFormContext();

  return (
    <FormContainer>
      <Input
        type="text"
        placeholder="Street Address"
        value={formData.streetAddress as string || ''}
        onChange={(e) => updateFormData({ streetAddress: e.target.value })}
        required
      />
      {formMessages.streetAddress && <ErrorMessage>{formMessages.streetAddress as string}</ErrorMessage>}

      <Input
        type="text"
        placeholder="City"
        value={formData.city as string || ''}
        onChange={(e) => updateFormData({ city: e.target.value })}
        required
      />
      {formMessages.city && <ErrorMessage>{formMessages.city as string}</ErrorMessage>}

      <Input
        type="text"
        placeholder="State"
        value={formData.state as string || ''}
        onChange={(e) => updateFormData({ state: e.target.value })}
        required
      />
      {formMessages.state && <ErrorMessage>{formMessages.state as string}</ErrorMessage>}

      <Input
        type="text"
        placeholder="Zip Code"
        value={formData.zipCode as string || ''}
        onChange={(e) => updateFormData({ zipCode: e.target.value })}
        required
      />
      {formMessages.zipCode && <ErrorMessage>{formMessages.zipCode as string}</ErrorMessage>}
    </FormContainer>
  );
};