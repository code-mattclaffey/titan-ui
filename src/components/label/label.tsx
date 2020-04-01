import React from 'react';
import classNames from 'classnames';
import { LabelInterface } from './types';

export const Label = ({
    additionalClassNames,
    children,
    htmlFor,
    labelText,
    required = true,
    ...rest
}: LabelInterface) => {
    const classes = classNames('e-label', additionalClassNames, {
        'e-label--required': required,
    });

    return (
        <label
            className={classes}
            htmlFor={htmlFor}
            {...rest}
            data-testid="e-label"
        >
            {labelText && (
                <span className="e-label__text">{labelText}</span>
            )}
            {children}
        </label>
    );
};
