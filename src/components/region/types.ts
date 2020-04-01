import { GenericComponent } from '../../module';

export interface RegionInterface extends GenericComponent {
    thin?: boolean;
    children: React.ReactNode;
}
