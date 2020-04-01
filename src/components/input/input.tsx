import React from 'react';
import classNames from 'classnames';
import { InputInterface } from './types';
import { Label } from '../label/label';

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

    return (
        <div className="e-input__container">
            <Label labelText={labelText} htmlFor={id}>
                <input
                    type={type}
                    className={classes}
                    name={name}
                    id={id}
                    {...rest}
                    required={required}
                    defaultValue={emptyValue ? null : defaultValue}
                />
            </Label>
        </div>
    );
};
