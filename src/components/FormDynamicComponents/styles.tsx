import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
`;

export const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.error};
  font-size: 0.8rem;
  margin-top: -5px;
  margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
`;

export const CharacterCount = styled.div`
  text-align: right;
  font-size: 12px;
  color: ${props => props.theme.colors.constrastText};
  margin-top: 5px;
`;