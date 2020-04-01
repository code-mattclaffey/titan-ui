import React from 'react';
import classNames from 'classnames';
import { TextAreaInterface } from './types';
import { Label } from '../label/label';

export const TextArea = ({
    additionalClassNames = '',
    name,
    id,
    required = true,
    defaultValue = '',
    labelText = '',
    ...rest
}: TextAreaInterface) => {
    const emptyValue = defaultValue.trim().length === 0;

    const classes = classNames('e-textarea', additionalClassNames);

    const textAreaClasses = classNames('e-input', {
        'e-input--empty': emptyValue,
    });

    return (
        <Label
            additionalClassNames={classes}
            labelText={labelText}
            required={required}
            htmlFor={id}
        >
            <textarea
                id={id}
                name={name}
                className={textAreaClasses}
                data-testid="e-textarea"
                required={required}
                defaultValue={emptyValue ? null : defaultValue}
                {...rest}
            />
        </Label>
    );
};
