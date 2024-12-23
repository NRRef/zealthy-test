import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  background-color: ${props => props.theme.colors.primary.main};
  color: ${props => props.theme.colors.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: ${props => props.theme.colors.disabled};
    cursor: auto;
  }
`;