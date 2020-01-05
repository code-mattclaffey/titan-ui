import React from 'react';
import classNames from 'classnames';
import {
    MediaContainerInterface,
    MediaImageContainerInterface,
    MediaContentContainerInterface,
} from './types';

export const MediaContainer = ({
    as = 'div',
    additionalClassNames = '',
    size,
    reverse,
    children,
    ...rest
}: MediaContainerInterface) => {
    const HtmlEl = as;

    const classes = classNames(
        'o-media',
        {
            'o-media--large': size === 'large',
            'o-media--reverse': reverse,
        },
        additionalClassNames,
    );

    return (
        <HtmlEl className={classes} {...rest}>
            {children}
        </HtmlEl>
    );
};

export const MediaImageContainer = ({
    as = 'div',
    additionalClassNames = '',
    children,
    ...rest
}: MediaImageContainerInterface) => {
    const HtmlEl = as;

    const classes = classNames('o-media__img', additionalClassNames);

    return (
        <HtmlEl className={classes} {...rest}>
            {children}
        </HtmlEl>
    );
};

export const MediaContentContainer = ({
    as = 'div',
    additionalClassNames = '',
    children,
    ...rest
}: MediaContentContainerInterface) => {
    const HtmlEl = as;

    const classes = classNames('o-media__body', additionalClassNames);

    return (
        <HtmlEl className={classes} {...rest}>
            {children}
        </HtmlEl>
    );
};
