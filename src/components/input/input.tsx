import React from 'react';
import classNames from 'classnames';
import { InputInterface } from './types';

export const Input = ({
    additionalClassNames = '',
    children,
    name,
    type,
    id,
    required = true,
    ...rest
}: InputInterface) => {
    const classes = classNames(`e-input`, additionalClassNames);

    return (
        <input
            type={type}
            className={classes}
            name={name}
            id={id}
            {...rest}
            required={required}
        />
    );
};
