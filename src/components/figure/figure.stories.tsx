import React from 'react';
import { Figure, FigCaption } from '.';
import { Image } from '../image';

export default {
    title: 'Figure',
    componentSubtitle: '',
};

export const figure = () => (
    <Figure captionText="Hello World">
        <Image
            src="https://via.placeholder.com/400x300"
            alt="A placeholder image"
        />
    </Figure>
);

export const figureExternalCaption = () => (
    <Figure>
        <Image
            src="https://via.placeholder.com/400x300"
            alt="A placeholder image"
        />
        <FigCaption>Hello World</FigCaption>
    </Figure>
);
