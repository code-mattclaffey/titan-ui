import React from 'react';
import { Image } from '.';

export default {
    title: 'Image',
    componentSubtitle: '',
};

export const image = () => (
    <Image
        src="https://via.placeholder.com/400x300"
        alt="A placeholder image"
    />
);
