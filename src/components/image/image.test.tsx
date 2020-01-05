import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Image } from '.';

afterEach(() => {
    cleanup();
});

describe('<Image />', () => {
    it('should match snapshot', () => {
        const { container } = render(
            <Image
                additionalClassNames="c-img"
                src="https://via.placeholder.com/400x300"
                alt="A placeholder image"
            />,
        );

        expect(container).toMatchSnapshot();
    });
});
