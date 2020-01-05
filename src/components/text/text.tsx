import React from 'react';
import classNames from 'classnames';
import { TextInterface } from './types';

export const Text = ({
    as = 'p',
    additionalClassNames = '',
    children,
    ...rest
}: TextInterface) => {
    const HtmlEl = as;
    const classes = classNames(`e-text`, additionalClassNames);

    return (
        <HtmlEl className={classes} {...rest}>
            {children}
        </HtmlEl>
    );
};
