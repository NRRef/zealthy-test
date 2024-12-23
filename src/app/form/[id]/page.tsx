'use client';

import { useParams } from 'next/navigation';
import { Container } from './styles';
import WizardForm from '@/components/Wizard';
import { FormProvider, useFormContext } from '@/contexts';
import { createSteps } from '@/components/FormDynamicComponents';
import { StepConfig } from '@/types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Spinner } from '@/styles';
import { getFormById, submitForm } from '@/services';

const StepRenderer: React.FC<{ step: StepConfig }> = ({ step }) => {
  return (
    <div className="step">
      {step.components.map((config, index) => {
        const Component = config.component;
        return (
          <>
            <h4>{String(config.props?.title) ?? ''}</h4>
            <hr/>
            <Component key={`${config.name}-${index}`} {...config.props} />
          </>
        );
      })}
    </div>
  );
};

interface FormContentProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const FormContent = ({setLoading}: FormContentProps) => {
  const { formData, validateStep, steps } = useFormContext();
  const { id } = useParams();
  const handleSubmit = () => {
    setLoading(true)
    submitForm(formData, id as string)
      .then(()=>{
        alert(`Submitted successfully`);
      })
      .catch((e)=>{
        alert(`Error on subission: ${e.message}`);
      })
      .finally(()=>window.location.reload())
  };

  const handleNext = (index: number) => {
    return validateStep(index);
  };

  return (<WizardForm onSubmit={handleSubmit} onNext={handleNext}>
      {steps.map((step, index) => {
        return <StepRenderer key={`step-renderer-${index}`} step={step} />
      })}
    </WizardForm>    
  );
};

const FormPage= () => {
  const [steps, setSteps] = useState<StepConfig[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | undefined>()
  
  const { id } = useParams();

  useEffect(()=>{
    getFormById(id as string)
      .then(data=>{
        const componentSteps = createSteps(data.steps)
        setSteps(componentSteps);
      })
      .catch(e=>{
        setError(e.message)
      })
      .finally(()=>setLoading(false))
  }, [])
   return (
    <FormProvider steps={steps}>
      <Container>
        {loading 
          ? <Spinner/>
          : (error 
              ? <h1>{error}</h1>
              : <FormContent setLoading={setLoading}/>
            )
        }
      </Container>
    </FormProvider>
  );
};

export default FormPage;