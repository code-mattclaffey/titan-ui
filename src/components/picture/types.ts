import { GenericComponent } from '../../module';

export interface PictureInterface extends GenericComponent {
    width?: number;
    height?: number;
    style?: React.CSSProperties;
}

export interface SourceInterface extends GenericComponent {
    srcSet: string;
    media: string;
}
