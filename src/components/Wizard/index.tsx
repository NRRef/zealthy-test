'use client'

import React, { useState } from 'react';
import { ButtonWrapper, Step, StepConnector, StepIndicator, WizardContainer, WizardContent } from './styles';
import { Button } from '../Button';

interface WizardFormProps {
  children: React.ReactNode[];
  onSubmit: ()=>void;
  onNext: (index:number)=>boolean;
}

const WizardForm: React.FC<WizardFormProps> = ({ children, onSubmit, onNext }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if(!onNext(currentStep)) return;
    if (currentStep < children.length - 1) {
      setCurrentStep(currentStep + 1);
      return;
    }
    onSubmit();
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <WizardContainer>
      <StepIndicator>
        {children.map((_, index) => (
            <>
                <StepConnector key={`conector-${index}`} first={index === 0} done={index <= currentStep}/>
                <Step key={`step-${index}`} active={index === currentStep} done={index < currentStep}>
                    {index + 1}
                </Step>
            </>
          
        ))}
      </StepIndicator>
      <WizardContent>
        {children[currentStep]}
      </WizardContent>
      <ButtonWrapper>
        <Button onClick={prev} label={"Previous"} disabled={currentStep === 0}/>
        <Button onClick={next} label={currentStep === children.length - 1 ? "Submit": "Next"}/>
      </ButtonWrapper>
    </WizardContainer>
  );
};

export default WizardForm;