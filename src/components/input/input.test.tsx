import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Input } from '.';

afterEach(() => {
    cleanup();
});

describe('<Input />', () => {
    it('should match snapshot', () => {
        const { container } = render(
            <Input type="text" name="hello-test" id="hello-test" />,
        );

        expect(container).toMatchSnapshot();
    });
});
