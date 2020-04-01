import React from 'react';
import classNames from 'classnames';
import { CheckboxInterface } from './types';
import { Label } from '../label/label';

export const Checkbox = ({
    additionalClassNames = '',
    name,
    id,
    checked = false,
    required = true,
    labelText,
    disabled,
}: CheckboxInterface) => {
    const classes = classNames('e-checkbox', additionalClassNames);

    return (
        <Label
            htmlFor={id}
            additionalClassNames={classes}
            labelText={labelText}
        >
            <input
                type="checkbox"
                className="u-visually-hidden e-checkbox__input"
                name={name}
                id={id}
                required={required}
                defaultChecked={checked}
                disabled={disabled}
            />
            <span className="e-checkbox__indicator" />
        </Label>
    );
};
