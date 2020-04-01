import { GenericComponent } from '../../module';

export interface PictureInterface extends GenericComponent {
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export interface SourceInterface extends GenericComponent {
    srcSet: string;
    media: string;
}
