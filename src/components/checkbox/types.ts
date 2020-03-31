import { GenericComponent } from '../../module';

export interface CheckboxInterface extends GenericComponent {
    id: string;
    name: string;
    required?: boolean;
    labelText: string;
    checked?: boolean;
    disabled?: boolean;
};