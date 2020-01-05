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
        'e-list',
        {
            'e-list--inline': inline !== undefined,
            'e-list--stacked': stacked !== undefined,
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
    ...rest
}: ListItemInterface) => {
    const HtmlEl = as;

    const classes = classNames('e-list__item', additionalClassNames);

    return (
        <HtmlEl className={classes} {...rest}>
            {children}
        </HtmlEl>
    );
};
