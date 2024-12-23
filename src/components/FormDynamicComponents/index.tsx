import { UserSignup, validate as UserSignupValidate } from '@/components/FormDynamicComponents/UserSignup';
import { AboutMe, validate as AboutMeValidate} from '@/components/FormDynamicComponents/AboutMe';
import { Address, validate as AddressValidate } from '@/components/FormDynamicComponents/Address';
import { BirthDate, validate as BirthDateValidate } from '@/components/FormDynamicComponents/BirthDate'; 
import { ComponentConfig, StepConfig } from '@/types';

const components: ComponentConfig[] = [
  {
    name: 'UserSignup',
    component: UserSignup,
    validate: UserSignupValidate,
    props: { title: "User Signup" }
  },
  {
    name: 'AboutMe',
    component: AboutMe,
    validate: AboutMeValidate,
    props: { title: "About yourself" }
  },
  {
    name: 'Address',
    component: Address,
    validate: AddressValidate,
    props: { title: "Address" }
  },
  {
    name: 'BirthDate',
    component: BirthDate,
    validate: BirthDateValidate,
    props: { title: "Birth Date" }
  },
];

type ComponentNames = typeof components[number]['name'];
type Step = ComponentNames[];
type Steps = Step[] 

export const createSteps = (steps: Steps): StepConfig[] => {
  return steps.map(step => ({
    components: step.map(componentName => {
      const matchingComponent = components.find(c => c.name === componentName) as ComponentConfig;
      return { ...matchingComponent };
    })
  }));
};
