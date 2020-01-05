import React from 'react';
import classNames from 'classnames';
import { FigureInterface, FigureCaptionInterface } from './types';

export const Figure = ({
    additionalClassNames = '',
    children,
    captionText,
    ...rest
}: FigureInterface) => {
    const classes = classNames(additionalClassNames);

    return (
        <figure className={classes} {...rest}>
            {children}
            {captionText && <FigCaption>{captionText}</FigCaption>}
        </figure>
    );
};

export const FigCaption = ({
    additionalClassNames = '',
    children,
    ...rest
}: FigureCaptionInterface) => {
    const classes = classNames(additionalClassNames);

    return (
        <figcaption className={classes} {...rest}>
            {children}
        </figcaption>
    );
};
