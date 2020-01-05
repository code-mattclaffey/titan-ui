import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Heading } from '.';

afterEach(() => {
    cleanup();
});

describe('<Heading />', () => {
    it('should match h1 snapshot', () => {
        const { container } = render(
            <Heading as="h1" type="h1">
                Headline 1
            </Heading>,
        );
        expect(container).toMatchSnapshot();
    });

    it('should match h2 snapshot', () => {
        const { container } = render(<Heading>Headline 2</Heading>);
        expect(container).toMatchSnapshot();
    });

    it('should match h3 snapshot', () => {
        const { container } = render(
            <Heading as="h3" type="h3">
                Headline 3
            </Heading>,
        );
        expect(container).toMatchSnapshot();
    });

    it('should match h4 snapshot', () => {
        const { container } = render(
            <Heading as="h4" type="h4">
                Headline 4
            </Heading>,
        );
        expect(container).toMatchSnapshot();
    });

    it('should match h5 snapshot', () => {
        const { container } = render(
            <Heading as="h5" type="h5">
                Headline 5
            </Heading>,
        );
        expect(container).toMatchSnapshot();
    });

    it('should match h6 snapshot', () => {
        const { container } = render(
            <Heading as="h6" type="h6">
                Headline 6
            </Heading>,
        );
        expect(container).toMatchSnapshot();
    });
});
