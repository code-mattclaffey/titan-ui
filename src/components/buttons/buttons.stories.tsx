import React from 'react';
import { Button } from '.';

export default {
    title: 'Buttons',
    componentSubtitle: 'Button variants',
    description:
        'The following variants can be applied to both `<button>`s and `<a>`s.',
};

export const disabledButton = () => (
    <Button disabled>Disabled</Button>
);

export const largeButton = () => (
    <Button size="large" variant="primary">
        Click Me!
    </Button>
);

export const buttonLink = () => (
    <Button as="a" href="#" variant="plain">
        Click Me!
    </Button>
);

export const primaryButton = () => (
    <Button variant="primary">Click Me!</Button>
);

export const outlineButton = () => (
    <Button variant="outline">Click Me!</Button>
);

export const secondaryButton = () => (
    <Button variant="secondary">Click Me!</Button>
);

export const smallButton = () => (
    <Button variant="secondary" size="small">
        Click Me!
    </Button>
);

export const wideButton = () => (
    <Button wide size="large" variant="secondary">
        Click Me!
    </Button>
);
