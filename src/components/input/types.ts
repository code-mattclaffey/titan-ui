import { GenericComponent } from '../../module';

export interface InputInterface extends GenericComponent {
    id: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    type: string;
    defaultValue?: string;
    labelText: string;
}
