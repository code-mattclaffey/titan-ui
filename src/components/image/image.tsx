import React from 'react';
import classNames from 'classnames';
import { ImageInterface } from './types';

export const Image = ({
    additionalClassNames = '',
    src,
    alt,
    children,
    ...rest
}: ImageInterface) => {
    const classes = classNames(additionalClassNames);

    return <img className={classes} {...rest} src={src} alt={alt} />;
};
