import { GenericComponent } from '../../module';

export interface MediaContainerInterface extends GenericComponent {
    size?: "large";
    reverse?: boolean;
}

export interface MediaImageContainerInterface extends GenericComponent {}
export interface MediaContentContainerInterface extends GenericComponent {}