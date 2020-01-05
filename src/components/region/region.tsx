import React from 'react';
import classNames from 'classnames';
import { RegionInterface } from './types';

export const Region = ({
    as = 'section',
    additionalClassNames = '',
    children,
    ...rest
}: RegionInterface) => {
    const HtmlEl = as;
    const classes = classNames(`o-region`, additionalClassNames);

    return (
        <HtmlEl className={classes} {...rest}>
            {children}
        </HtmlEl>
    );
};

export const RegionInner = ({
    as = 'div',
    additionalClassNames = '',
    children,
    ...rest
}: RegionInterface) => {
    const HtmlEl = as;
    const classes = classNames(
        `o-region__inner`,
        additionalClassNames,
    );

    return (
        <HtmlEl className={classes} {...rest}>
            {children}
        </HtmlEl>
    );
};
