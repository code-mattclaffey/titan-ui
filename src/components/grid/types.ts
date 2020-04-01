import { GenericComponent } from '../../module';

export interface GridIterface extends GenericComponent {
    children: React.ReactNode;
}

export interface GridItemInterface extends GenericComponent {
    columns: {
        xs: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
    };
    children: React.ReactNode;
}
