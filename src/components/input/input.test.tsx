import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Input } from '.';

afterEach(() => {
    cleanup();
});

describe('<Input />', () => {
    it('should match snapshot', () => {
        const { container } = render(
            <Input
                type="text"
                name="hello-test"
                id="hello-test"
                labelText="Hello World"
            />,
        );

        expect(container).toMatchSnapshot();
    });

    it('should match snapshot when it has a value', () => {
        const { container } = render(
            <Input
                type="text"
                name="hello-test"
                id="hello-test"
                defaultValue="hello world"
                labelText="Hello World"
            />,
        );

        expect(container).toMatchSnapshot();
    });
});
