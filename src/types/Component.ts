import { RecordFormType } from "./Form";

export interface ComponentConfig {
    name: string;
    component: React.FC;
    validate: (formData: Record<string, RecordFormType>, updateFormMessages: (newData: Partial<Record<string, RecordFormType>>) => void) => boolean;
    props?: Record<string, RecordFormType>;
}