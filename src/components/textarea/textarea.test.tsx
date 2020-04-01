import React from 'react';

import { render, cleanup } from '@testing-library/react';
import { TextArea } from './textarea';

afterEach(() => {
    cleanup();
});

describe('<TextArea />', () => {
    it('should match snapshot', () => {
        const { container } = render(
            <TextArea
                name="hello-test"
                id="hello-test"
                labelText="Hello World"
                required={false}
            />,
        );

        expect(container).toMatchSnapshot();
    });

    it('should have required attribute to it', () => {
        const { queryByTestId } = render(
            <TextArea
                name="hello-test"
                id="hello-test"
                labelText="Hello World"
                required
            />,
        );

        expect(
            queryByTestId('e-textarea').hasAttribute('required'),
        ).toBeTruthy();
    });

    it('should have placeholder', () => {
        const expectedText = 'This is some placeholder text';
        const { queryByTestId } = render(
            <TextArea
                name="hello-test"
                id="hello-test"
                labelText="Hello World"
                placeholder={expectedText}
            />,
        );

        expect(
            queryByTestId('e-textarea').hasAttribute('placeholder'),
        ).toBeTruthy();
        expect(
            queryByTestId('e-textarea').getAttribute('placeholder'),
        ).toEqual(expectedText);
    });

    it('should have empty class when default is empty', () => {
        const { queryByTestId } = render(
            <TextArea
                name="hello-test"
                id="hello-test"
                labelText="Hello World"
                defaultValue="          "
            />,
        );

        expect(
            queryByTestId('e-textarea').getAttribute('value'),
        ).toBeNull();
        expect(
            queryByTestId('e-textarea').classList.contains(
                'e-input--empty',
            ),
        ).toBeTruthy();
    });

    it('should not have empty class ', () => {
        const expectedText = 'This is some default value text';
        const { getByDisplayValue, queryByTestId } = render(
            <TextArea
                name="hello-test"
                id="hello-test"
                labelText="Hello World"
                defaultValue={expectedText}
            />,
        );

        expect(getByDisplayValue(expectedText)).not.toBeNull();
        expect(
            queryByTestId('e-textarea').classList.contains(
                'e-input--empty',
            ),
        ).toBeFalsy();
    });
});
