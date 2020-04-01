import { GenericComponent } from '../../module';

export interface HeadingInterface extends GenericComponent {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
}
