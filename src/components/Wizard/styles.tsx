import styled from 'styled-components';

export const WizardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  min-height: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 8px;
`;

export const StepIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  position: relative;
`;

export const StepConnector = styled.div<{ first: boolean, done:boolean }>`
  flex-grow: 1;
  height: 2px;
  align-self:center;
  background-color: ${props => props.done ? props.theme.colors.primary.lighter : props.theme.colors.disabled};
  display:  ${props => props.first ? 'none':'auto'};
  z-index: 1;
`;

export const Step = styled.div<{ active: boolean, done:boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.active ? props.theme.colors.primary.main : (props.done ? props.theme.colors.primary.lighter : props.theme.colors.disabled)};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-top: 20px;
  
`;

export const WizardContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  height: 100%;
  padding:10px
`;