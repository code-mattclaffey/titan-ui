import React from 'react';
import classNames from 'classnames';
import { AnchorInterface } from './types';

export const Anchor = ({
    url,
    children,
    additionalClassNames,
    ...rest
}: AnchorInterface) => {
    const classes = classNames('e-link', additionalClassNames);

    return (
        <a
            href={url}
            className={classes}
            rel={
                rest.target === '_blank'
                    ? 'noopener noreferrer'
                    : undefined
            }
            {...rest}
        >
            {children}
        </a>
    );
};
