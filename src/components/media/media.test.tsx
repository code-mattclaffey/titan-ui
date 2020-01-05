import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {
    MediaContainer,
    MediaImageContainer,
    MediaContentContainer,
} from '.';

afterEach(() => {
    cleanup();
});

describe('<MediaContainer />, MediaImageContainer & MediaContentContainer', () => {
    it('should match inline snapshot', () => {
        const { container } = render(
            <MediaContainer additionalClassNames="c-media-item">
                <MediaImageContainer additionalClassNames="c-media-item__image-container">
                    <p>Image container</p>
                </MediaImageContainer>
                <MediaContentContainer additionalClassNames="c-media-item__content-container">
                    <p>Content container</p>
                </MediaContentContainer>
            </MediaContainer>,
        );

        expect(container).toMatchSnapshot();
    });
});
