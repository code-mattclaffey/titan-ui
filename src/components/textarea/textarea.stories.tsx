import React from 'react';

import { TextArea } from './textarea';

export default {
    title: 'TextArea',
    componentSubtitle: '',
};

export const textTextArea = () => (
    <TextArea
        name="hello-test"
        id="hello-test"
        placeholder="Test placeholder"
        labelText="Hello Test"
    />
);

export const invalidTextArea = () => (
    <TextArea
        name="hello-test"
        id="hello-test"
        labelText="Hello Test"
    />
);

export const validTextArea = () => (
    <TextArea
        name="hello-test"
        id="hello-test"
        defaultValue="Default Text"
        labelText="Hello Test"
    />
);
