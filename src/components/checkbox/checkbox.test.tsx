import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Checkbox } from './checkbox';

afterEach(() => {
    cleanup();
});

describe('<Checkbox />', () => {
    it('should match snapshot in default state', () => {
        const { container } = render(
            <Checkbox
                name="hello-test"
                id="hello-test"
                labelText="Hello Test"
            />,
        );

        expect(container).toMatchSnapshot();
    });

    it('should match snapshot in checked state', () => {
        const { container } = render(
            <Checkbox
                name="hello-test"
                id="hello-test"
                labelText="Hello Test"
                checked
            />,
        );

        expect(container).toMatchSnapshot();
    });

    it('should match snapshot in disabled state', () => {
        const { container } = render(
            <Checkbox
                name="hello-test"
                id="hello-test"
                labelText="Hello Test"
                disabled
            />,
        );

        expect(container).toMatchSnapshot();
    });
});
