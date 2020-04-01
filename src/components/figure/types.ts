import { GenericComponent } from '../../module';

export interface FigureInterface extends GenericComponent {
    captionText?: string;
    children: React.ReactNode;
}

export interface FigureCaptionInterface extends GenericComponent {
    children: React.ReactNode;
}
