import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Blockquote } from '.';

afterEach(() => {
    cleanup();
});

describe('<Blockquote />', () => {
    it('should match h1 snapshot', () => {
        const { container } = render(
            <Blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </Blockquote>,
        );

        expect(container).toMatchSnapshot();
    });
});
