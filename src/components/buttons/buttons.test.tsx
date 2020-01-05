import React from 'react';
import { render, cleanup } from '@testing-library/react';
import each from 'jest-each';
import { Button } from '.';

afterEach(() => {
    cleanup();
});

describe('<Button />', () => {
    it('should match snapshot', () => {
        const { container } = render(<Button>Hello World</Button>);

        expect(container).toMatchSnapshot();
    });

    each([
        ['secondary', 'c-button--secondary'],
        ['plain', 'c-button--plain'],
        ['primary', 'c-button--primary'],
        ['outline', 'c-button--outline'],
    ]).test(
        'should render a %s class when %s is set as a prop variant prop',
        (variant, expectedClassName) => {
            const { queryByTestId, container } = render(
                <Button variant={variant}>Hello World</Button>,
            );

            expect(container).toMatchSnapshot();
            expect(
                queryByTestId('c-button').classList.contains(
                    expectedClassName,
                ),
            ).toEqual(true);
        },
    );

    each([
        ['large', 'c-button--large'],
        ['small', 'c-button--small'],
        ['slim', 'c-button--slim'],
    ]).test(
        'should render a %s class when %s is set as a prop size prop',
        (size, expectedClassName) => {
            const { queryByTestId, container } = render(
                <Button size={size}>Hello World</Button>,
            );

            expect(container).toMatchSnapshot();
            expect(
                queryByTestId('c-button').classList.contains(
                    expectedClassName,
                ),
            ).toEqual(true);
        },
    );

    it('should render the wide class when wide prop is added', () => {
        const { queryByTestId, container } = render(
            <Button wide>Hello World</Button>,
        );

        expect(container).toMatchSnapshot();
        expect(
            queryByTestId('c-button').classList.contains(
                'c-button--wide',
            ),
        ).toEqual(true);
    });

    it('should render the wide class when disabled prop is added', () => {
        const { queryByTestId, container } = render(
            <Button disabled>Hello World</Button>,
        );

        expect(container).toMatchSnapshot();
        expect(
            queryByTestId('c-button').classList.contains(
                'c-button--disabled',
            ),
        ).toEqual(true);

        expect(
            queryByTestId('c-button').hasAttribute('disabled'),
        ).toEqual(true);
    });
});
