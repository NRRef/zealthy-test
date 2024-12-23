'use client'

import React, { useState, useEffect } from 'react';
import { useFormContext } from '@/contexts';
import { CharacterCount, FormContainer, TextArea } from '../styles';
import { RecordFormType } from '@/types';

// eslint-disable-next-line
export const validate = (formData: Record<string, RecordFormType>, updateFormMessages: (newData: Partial<Record<string, RecordFormType>>) => void):boolean => {
  return true;
}

export const AboutMe: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const [characterCount, setCharacterCount] = useState(0);

  useEffect(() => {
    setCharacterCount(formData.aboutMe ? (formData.aboutMe as string).length : 0);
  }, [formData.aboutMe]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateFormData({ aboutMe: e.target.value });
  };

  return (
    <FormContainer>
      <TextArea
        placeholder="Tell us about yourself..."
        value={formData.aboutMe as string || ''}
        onChange={handleChange}
        rows={5}
      />
      <CharacterCount>{characterCount} characters</CharacterCount>
    </FormContainer>
  );
};