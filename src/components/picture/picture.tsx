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

    let styleProps: React.CSSProperties = {
        paddingTop: '',
    };

    if (style) {
        styleProps = style;
    }

    if (width && height) {
        styleProps.paddingTop = `${calculateAspectRatio(
            height,
            width,
        )}%`;
    }

    return (
        <picture className={classes} {...rest} style={styleProps}>
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
