import React from 'react';
import classNames from 'classnames';
import { HeadingInterface } from './types';

export const Heading = ({
    as = 'h2',
    additionalClassNames = '',
    children,
    ...rest
}: HeadingInterface) => {
    const HtmlEl = as;
    const classes = classNames(
        `e-heading e-heading--${as}`,
        additionalClassNames,
    );

    return (
        <HtmlEl className={classes} {...rest}>
            {children}
        </HtmlEl>
    );
};
