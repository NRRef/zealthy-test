import { ButtonContainer } from "./styles";

export interface ButtomProps{
    label:string;
    onClick: ()=>void;
    disabled?: boolean;
}

export const Button: React.FC<ButtomProps> = ({ label, onClick, disabled }) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
        {label}
    </ButtonContainer>
  );
};