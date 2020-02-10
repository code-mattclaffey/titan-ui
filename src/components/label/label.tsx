import React from 'react';
import classNames from 'classnames';
import { LabelInterface } from './types';

export const Label = ({
    additionalClassNames,
    children,
    htmlFor,
    labelText,
    ...rest
}: LabelInterface) => {
    const classes = classNames('e-label', additionalClassNames);

    return (
        <label className={classes} htmlFor={htmlFor} {...rest}>
            <span>{labelText}</span>
            {children}
        </label>
    );
};
