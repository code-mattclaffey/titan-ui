import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Anchor } from '.';

afterEach(() => {
    cleanup();
});

describe('<Anchor />', () => {
    it('should match snapshot', () => {
        const { container } = render(
            <Anchor url="#">a standard link</Anchor>,
        );

        expect(container).toMatchSnapshot();
    });

    it('should match target blank snapshot', () => {
        const { container } = render(
            <Anchor url="#" target="_blank">
                a standard link
            </Anchor>,
        );

        expect(container).toMatchSnapshot();
    });
});
