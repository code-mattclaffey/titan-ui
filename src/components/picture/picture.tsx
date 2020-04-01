import React from 'react';
import classNames from 'classnames';
import { PictureInterface, SourceInterface } from './types';

export const calculateAspectRatio = (h: number, w: number) =>
    (h / w) * 100;

export const Picture = ({
    additionalClassNames = '',
    width,
    height,
    style,
    children,
    ...rest
}: PictureInterface) => {
    const classes = classNames('e-picture', additionalClassNames);

    const styleProps: { paddingTop: string } = {
        paddingTop: null,
    };

    if (width && height) {
        styleProps.paddingTop = `${calculateAspectRatio(
            height,
            width,
        )}%`;
    }

    return (
        <picture
            className={classes}
            {...rest}
            style={{ ...style, ...styleProps }}
        >
            {children}
        </picture>
    );
};

export const Source = ({
    srcSet,
    media,
    ...rest
}: SourceInterface) => (
    <source srcSet={srcSet} media={media} {...rest} />
);
