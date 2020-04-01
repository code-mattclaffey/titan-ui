import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Label } from './label';

afterEach(() => {
    cleanup();
});

describe('<Label />', () => {
    it('should match the snapshot', () => {
        const { container } = render(
            <>
                <Label
                    htmlFor="test"
                    labelText="Hello World"
                    required={false}
                />
                ,
                <input id="test" />
            </>,
        );

        expect(container).toMatchSnapshot();
    });

    it('should have required * when the prop is set', () => {
        const { queryByTestId } = render(
            <>
                <Label
                    htmlFor="test"
                    labelText="Hello World"
                    required
                />
                ,
                <input id="test" />
            </>,
        );

        expect(
            queryByTestId('e-label').classList.contains(
                'e-label--required',
            ),
        ).toBeTruthy();
    });
});
