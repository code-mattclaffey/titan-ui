import React from 'react';
import classNames from 'classnames';
import { ListInterface, ListItemInterface } from './types';

export const List = ({
    as = 'ul',
    additionalClassNames = '',
    inline,
    stacked,
    children,
    ...rest
}: ListInterface) => {
    const HtmlEl = as;

    const classes = classNames(
        'o-list',
        {
            'o-list-inline': inline !== undefined,
            'o-list-stacked': stacked !== undefined,
        },
        additionalClassNames,
    );

    return (
        <HtmlEl className={classes} {...rest}>
            {children}
        </HtmlEl>
    );
};

export const ListItem = ({
    as = 'li',
    additionalClassNames = '',
    children,
    highlight,
    ...rest
}: ListItemInterface) => {
    const HtmlEl = as;

    const classes = classNames(
        'o-list-inline__item',
        {
            'o-list__item--highlighted': highlight !== undefined,
        },
        additionalClassNames,
    );

    return (
        <HtmlEl className={classes} {...rest}>
            {children}
        </HtmlEl>
    );
};
