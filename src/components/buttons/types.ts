import { GenericComponent } from '../../module';

export interface ButtonInterface extends GenericComponent {
    variant?: "primary" | "secondary" | "plain" | "outline";
    size?: "small" | "large" | "slim",
    wide?: boolean;
    type?: string;
    disabled?: boolean;
}
