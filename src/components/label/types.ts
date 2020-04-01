import { GenericComponent } from '../../module';

export interface LabelInterface extends GenericComponent {
    htmlFor: string;
    labelText?: string;
    required?: boolean;
}
