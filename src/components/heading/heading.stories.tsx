import React from 'react';

import { Heading } from '.';

export default {
    title: 'Heading',
    componentSubtitle: '',
};

export const headings = () => (
    <>
        <Heading as="h1" type="h1">
            Headline 1
        </Heading>
        <Heading>Headline 2</Heading>
        <Heading as="h3" type="h3">
            Headline 3
        </Heading>
        <Heading as="h4" type="h4">
            Headline 4
        </Heading>
        <Heading as="h5" type="h5">
            Headline 5
        </Heading>
        <Heading as="h6" type="h6">
            Headline 6
        </Heading>
    </>
);
