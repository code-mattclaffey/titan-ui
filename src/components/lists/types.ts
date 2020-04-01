import { GenericComponent } from '../../module';

export interface ListInterface extends GenericComponent {
    stacked?: boolean;
    inline?: boolean;
    children: React.ReactNode;
}

export interface ListItemInterface extends GenericComponent {
    children: React.ReactNode;
}
