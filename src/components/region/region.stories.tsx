import React from 'react';

import { Heading } from '../heading';
import { Text } from '../text';

import { RegionInner, Region } from '.';

export default {
    title: 'Regions',
    componentSubtitle: '',
};

export const region = () => (
    <Region>
        <RegionInner>
            <Heading as="h1">Headline 1</Heading>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </Text>
        </RegionInner>
    </Region>
);

export const regionBg = () => (
    <Region
        style={{
            '--region-bg': 'var(--primary)',
            '--region-text-color': 'var(--white)',
        }}
    >
        <RegionInner>
            <Heading as="h1">Headline 1</Heading>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </Text>
        </RegionInner>
    </Region>
);

export const regionThin = () => (
    <Region>
        <RegionInner thin>
            <Heading as="h1">Headline 1</Heading>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </Text>
        </RegionInner>
    </Region>
);
