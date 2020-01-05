import { GenericComponent } from '../../module';

export interface GridIterface extends GenericComponent {}

export interface GridItemInterface extends GenericComponent {
    columns: {
        xs: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
    };
}
