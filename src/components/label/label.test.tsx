import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Label } from '.';

afterEach(() => {
    cleanup();
});

describe('<Label />', () => {
    it('should match the snapshot', () => {
        const { container } = render(
            <Label htmlFor="test" labelText="Hello World" />,
        );

        expect(container).toMatchSnapshot();
    });
});
