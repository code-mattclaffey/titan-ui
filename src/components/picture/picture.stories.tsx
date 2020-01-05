import React from 'react';
import { Picture, Source } from '.';
import { Image } from '../image';

export default {
    title: 'Picture',
    componentSubtitle: '',
};

export const picture = () => (
    <Picture width={400} height={300}>
        <Source
            srcSet="https://via.placeholder.com/400x300"
            media="(max-width: 800px)"
        />
        <Image
            src="https://via.placeholder.com/400x300"
            alt="A placeholder image"
        />
    </Picture>
);
