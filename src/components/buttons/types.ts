import { GenericComponent } from '../../module';

export interface ButtonInterface extends GenericComponent {
    variant?: 'primary' | 'secondary' | 'plain' | 'outline';
    size?: 'small' | 'large' | 'slim';
    wide?: boolean;
    buttonType?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    children: React.ReactNode;
}

export interface ButtonLinkInterface extends ButtonInterface {
    url: string;
    children: React.ReactNode;
}
