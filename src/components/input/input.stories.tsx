import React from 'react';

import { Input } from '.';

export default {
    title: 'Input',
    componentSubtitle: '',
};

export const textInput = () => (
    <Input
        type="text"
        name="hello-test"
        id="hello-test"
        placeholder="Test placeholder"
        labelText="Hello Test"
    />
);

export const invalidInput = () => (
    <Input
        type="text"
        name="hello-test"
        id="hello-test"
        pattern="[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}"
        defaultValue="I am a default text value, why am I invalid?"
        labelText="Hello Test"
    />
);

export const numberInput = () => (
    <Input
        type="number"
        name="hello-test"
        id="hello-test"
        labelText="Hello Test"
    />
);

export const validInput = () => (
    <Input
        type="text"
        name="hello-test"
        id="hello-test"
        defaultValue="Default Text"
        labelText="Hello Test"
    />
);
