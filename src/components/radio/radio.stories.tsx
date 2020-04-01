import React from 'react';

import { Radio } from './radio';

export default {
    title: 'Radio',
    componentSubtitle: '',
};

export const radio = () => (
    <>
        <Radio
            name="hello-test"
            id="hello-test-radio-1"
            labelText="Radio One"
        />
        <Radio
            name="hello-test"
            id="hello-test-radio-box-2"
            labelText="Radio Two"
            checked
        />
        <Radio
            name="hello-test"
            id="hello-test-radio-box-3"
            labelText="Radio Three (Disabled)"
            disabled
        />
    </>
);
