import React from 'react';
import { Figure, FigCaption } from '.';

export const figure = () => <Figure captionText="Hello World" />;

export const figureExternalCaption = () => (
    <Figure>
        <FigCaption>Hello World</FigCaption>
    </Figure>
);
