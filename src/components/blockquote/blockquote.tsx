import React from 'react';
import classNames from 'classnames';
import { BlockquoteInterface } from './types';

export const Blockquote = ({
    as = 'blockquote',
    additionalClassNames = '',
    children,
    ...rest
}: BlockquoteInterface) => {
    const HtmlEl = as;
    const classes = classNames(`e-blockquote`, additionalClassNames);

    return (
        <HtmlEl className={classes} {...rest}>
            {children}
        </HtmlEl>
    );
};
