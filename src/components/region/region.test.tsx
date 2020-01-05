import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Region, RegionInner } from '.';

afterEach(() => {
    cleanup();
});

describe('<Region />', () => {
    it('should match snapshot', () => {
        const { container } = render(
            <Region>
                <RegionInner />
            </Region>,
        );
        expect(container).toMatchSnapshot();
    });
});
