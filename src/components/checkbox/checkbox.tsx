import React from 'react';
import classNames from 'classnames';
import { CheckboxInterface } from './types';

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
        <label htmlFor={id} className={classes}>
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
            <span className="e-label">{labelText}</span>
        </label>
    );
};
