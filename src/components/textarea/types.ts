import { GenericComponent } from '../../module';

export interface TextAreaInterface extends GenericComponent {
    id: string;
    name: string;
    defaultValue?: string;
    placeholder?: string;
    required?: boolean;
    labelText: string;
}
