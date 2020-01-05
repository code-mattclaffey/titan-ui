import React from 'react';

import { Anchor } from '.';

export default {
    title: 'Anchor',
    componentSubtitle: '',
};

export const anchor = () => (
    <>
        <Anchor url="/other">Default Anchor</Anchor> <br />
        <Anchor url="/">Active Anchor</Anchor>
    </>
);
