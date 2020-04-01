import { GenericComponent } from '../../module';

export interface RadioInterface extends GenericComponent {
    id: string;
    name: string;
    required?: boolean;
    labelText: string;
    checked?: boolean;
    disabled?: boolean;
}
