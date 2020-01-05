import React from 'react';
import classNames from 'classnames';
import { ButtonInterface } from './types';

export const Button = ({
    as = 'button',
    additionalClassNames = '',
    variant = 'primary',
    size,
    wide,
    disabled,
    type = 'button',
    children,
    ...rest
}: ButtonInterface) => {
    const HtmlEl = as;
    const buttonProps = { ...rest };

    const classes = classNames(
        'c-button',
        {
            'c-button--primary': variant === 'primary',
            'c-button--secondary': variant === 'secondary',
            'c-button--plain': variant === 'plain',
            'c-button--outline': variant === 'outline',
            'c-button--small': size === 'small',
            'c-button--large': size === 'large',
            'c-button--slim': size === 'slim',
            'c-button--wide': wide,
            'c-button--disabled': disabled,
        },
        additionalClassNames,
    );

    return (
        <HtmlEl
            data-testid="c-button"
            className={classes}
            type={type}
            disabled={disabled}
            {...buttonProps}
        >
            {children}
        </HtmlEl>
    );
};
