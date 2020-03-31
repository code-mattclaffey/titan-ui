import React from 'react';

import { Checkbox } from './checkbox';

export default {
    title: 'Checkbox',
    componentSubtitle: '',
};

export const checkbox = () => (
    <>
        <Checkbox
            name="hello-test"
            id="hello-test-checkbox-1"
            labelText="Checkbox One"
        />
        <Checkbox
            name="hello-test"
            id="hello-test-checkbox-box-2"
            labelText="Checkbox Two"
            checked
        />
        <Checkbox
            name="hello-test"
            id="hello-test-checkbox-box-3"
            labelText="Checkbox Three (Disabled)"
            disabled
        />
    </>
);
