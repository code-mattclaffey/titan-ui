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
                <RegionInner>
                    <p>Some text</p>
                </RegionInner>
            </Region>,
        );
        expect(container).toMatchSnapshot();
    });

    it('should have a thin class', () => {
        const { queryByTestId } = render(
            <Region>
                <RegionInner thin>
                    <p>Some text</p>
                </RegionInner>
            </Region>,
        );
        expect(
            queryByTestId('region-inner').classList.contains(
                'o-region__inner--thin',
            ),
        ).toEqual(true);
    });
});
