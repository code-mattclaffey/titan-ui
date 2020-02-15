import React from 'react';

import { Input } from '.';

export default {
    title: 'Input',
    componentSubtitle: '',
};

export const textInput = () => (
    <Input type="text" name="hello-test" id="hello-test" />
);

export const numberInput = () => (
    <Input type="number" name="hello-test" id="hello-test" />
);
