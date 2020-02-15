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
    thin,
    ...rest
}: RegionInterface) => {
    const HtmlEl = as;
    const classes = classNames(
        `o-region__inner`,
        {
            'o-region__inner--thin': thin !== undefined,
        },
        additionalClassNames,
    );

    return (
        <HtmlEl
            data-testid="region-inner"
            className={classes}
            {...rest}
        >
            {children}
        </HtmlEl>
    );
};
