import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Grid, GridItem } from '.';

afterEach(() => {
    cleanup();
});

describe('<Grid />', () => {
    it('should match snapshot', () => {
        const { container } = render(
            <Grid>
                <GridItem
                    columns={{
                        xs: '1',
                        sm: '3',
                        md: '6',
                        lg: '9',
                        xl: '12',
                    }}
                ></GridItem>
                <GridItem
                    columns={{
                        xs: '6',
                        lg: '9',
                        xl: '12',
                    }}
                ></GridItem>
            </Grid>,
        );

        expect(container).toMatchSnapshot();
    });
});
