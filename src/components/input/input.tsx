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
    defaultValue = '',
    labelText = '',
    ...rest
}: InputInterface) => {
    const emptyValue = defaultValue.trim().length === 0;

    const classes = classNames(`e-input`, additionalClassNames, {
        'e-input--empty': emptyValue,
    });

    const labelClasses = classNames('e-label', additionalClassNames, {
        'e-label--required': required !== undefined,
    });

    return (
        <div className="e-input__container">
            <label className={labelClasses} htmlFor={id}>
                {labelText}
            </label>
            <input
                type={type}
                className={classes}
                name={name}
                id={id}
                {...rest}
                required={required}
                defaultValue={emptyValue ? null : defaultValue}
            />
        </div>
    );
};
