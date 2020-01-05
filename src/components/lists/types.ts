import { GenericComponent } from '../../module';

export interface ListInterface extends GenericComponent{
    stacked?: boolean;
    inline?: boolean;
}

export interface ListItemInterface extends GenericComponent{
    highlight?: boolean;
}
