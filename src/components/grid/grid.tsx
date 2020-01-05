import React from 'react';
import classNames from 'classnames';
import { GridItemInterface, GridIterface } from './types';

const addColumnClassToArray = (
    span: string | undefined,
    breakpoint: string,
) => {
    if (span !== undefined) {
        return `o-grid__item--${span}/12${breakpoint}`;
    }

    return '';
};

export const Grid = ({
    as = 'div',
    additionalClassNames = '',
    children,
    ...rest
}: GridIterface) => {
    const HtmlEl = as;
    const classes = classNames('o-grid', additionalClassNames);

    return (
        <HtmlEl className={classes} {...rest}>
            {children}
        </HtmlEl>
    );
};

export const GridItem = ({
    as = 'div',
    columns,
    additionalClassNames = '',
    children,
    ...rest
}: GridItemInterface) => {
    const HtmlEl = as;
    const { xs, sm, md, lg, xl } = columns;

    const gridColumnClasses = [
        addColumnClassToArray(xs, ''),
        addColumnClassToArray(sm, '@sm'),
        addColumnClassToArray(md, '@md'),
        addColumnClassToArray(lg, '@lg'),
        addColumnClassToArray(xl, '@xl'),
    ].filter(string => string.length > 0);

    const classes = classNames(
        `o-grid__item`,
        additionalClassNames,
        gridColumnClasses,
    );

    return (
        <HtmlEl className={classes} {...rest}>
            {children}
        </HtmlEl>
    );
};
