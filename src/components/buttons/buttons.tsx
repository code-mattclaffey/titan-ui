import React from 'react';
import classNames from 'classnames';
import { ButtonInterface, ButtonLinkInterface } from './types';
import { Anchor } from '../anchor';

export const ButtonLink = ({
    additionalClassNames = '',
    variant = 'primary',
    size,
    wide,
    disabled,
    url,
    children,
    ...rest
}: ButtonLinkInterface) => {
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
        <Anchor
            additionalClassNames={classes}
            url={url}
            {...rest}
            data-testid="c-button"
        >
            {children}
        </Anchor>
    );
};

export const Button = ({
    additionalClassNames = '',
    variant = 'primary',
    size,
    wide,
    disabled,
    buttonType = 'button',
    children,
    ...rest
}: ButtonInterface) => {
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
        <button
            data-testid="c-button"
            className={classes}
            disabled={disabled}
            {...buttonProps}
            type={buttonType}
        >
            {children}
        </button>
    );
};
