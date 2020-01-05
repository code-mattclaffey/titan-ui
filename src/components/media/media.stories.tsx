import React from 'react';

import {
    MediaContainer,
    MediaContentContainer,
    MediaImageContainer,
} from '.';

import { Image } from '../image';

// import { Heading } from '../typography';

export default {
    title: 'Media',
    componentSubtitle: 'Media styles',
};

export const media = () => (
    <>
        {/* <Heading>Media object example</Heading> */}
        <MediaContainer>
            <MediaImageContainer>
                <Image
                    src="https://via.placeholder.com/400x225"
                    alt=""
                />
            </MediaImageContainer>
            <MediaContentContainer>
                <p>
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit.
                </p>
                <p>
                    Eius minus quibusdam dolorum voluptatum
                    repudiandae nisi nulla quaerat minima consequatur
                    delectus quasi, vitae molestiae quis adipisci enim
                    odio ullam iusto facilis?
                </p>
            </MediaContentContainer>
        </MediaContainer>

        <hr />

        {/* <Heading>Media object large example</Heading> */}
        <MediaContainer size="large">
            <MediaImageContainer>
                <Image
                    src="https://via.placeholder.com/400x225"
                    alt=""
                />
            </MediaImageContainer>
            <MediaContentContainer>
                <p>
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit.
                </p>
                <p>
                    Eius minus quibusdam dolorum voluptatum
                    repudiandae nisi nulla quaerat minima consequatur
                    delectus quasi, vitae molestiae quis adipisci enim
                    odio ullam iusto facilis?
                </p>
            </MediaContentContainer>
        </MediaContainer>

        <hr />

        {/* <Heading>Media object reversed example</Heading> */}
        <MediaContainer reverse>
            <MediaImageContainer>
                <Image
                    src="https://via.placeholder.com/400x225"
                    alt=""
                />
            </MediaImageContainer>
            <MediaContentContainer>
                <p>
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit.
                </p>
                <p>
                    Eius minus quibusdam dolorum voluptatum
                    repudiandae nisi nulla quaerat minima consequatur
                    delectus quasi, vitae molestiae quis adipisci enim
                    odio ullam iusto facilis?
                </p>
            </MediaContentContainer>
        </MediaContainer>
    </>
);
