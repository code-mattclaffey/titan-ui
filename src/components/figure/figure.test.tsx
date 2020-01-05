import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Figure, FigCaption } from '.';
import { Image } from '../image';

afterEach(() => {
    cleanup();
});

describe('<Figure />', () => {
    it('should match Figure only snapshot', () => {
        const { container } = render(
            <Figure
                captionText="Hello World"
                additionalClassNames="c-figure"
            >
                <Image
                    src="https://via.placeholder.com/400x300"
                    alt="A placeholder image"
                />
            </Figure>,
        );

        expect(container).toMatchSnapshot();
    });

    it('should match Figure & FigCaption snapshot', () => {
        const { container } = render(
            <Figure additionalClassNames="c-figure">
                <Image
                    src="https://via.placeholder.com/400x300"
                    alt="A placeholder image"
                />
                <FigCaption additionalClassNames="c-figure__caption">
                    Hello World
                </FigCaption>
            </Figure>,
        );

        expect(container).toMatchSnapshot();
    });
});
