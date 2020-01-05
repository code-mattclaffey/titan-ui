import { GenericComponent } from '../../module';

export interface AnchorInterface extends GenericComponent {
    url: string;
    target?: string;
}
