import React from 'react';
import classNames from 'classnames';
import { RadioInterface } from './types';
import { Label } from '../label/label';

export const Radio = ({
    additionalClassNames = '',
    name,
    id,
    checked = false,
    required = true,
    labelText,
    disabled,
}: RadioInterface) => {
    const classes = classNames('e-radio', additionalClassNames);

    return (
        <Label
            htmlFor={id}
            additionalClassNames={classes}
            labelText={labelText}
            required={false}
        >
            <input
                type="radio"
                className="u-visually-hidden e-radio__input"
                name={name}
                id={id}
                required={required}
                defaultChecked={checked}
                disabled={disabled}
            />
            <span className="e-radio__indicator" />
        </Label>
    );
};
