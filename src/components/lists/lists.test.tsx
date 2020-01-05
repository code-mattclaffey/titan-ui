import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { List, ListItem } from '.';

afterEach(() => {
    cleanup();
});

describe('<List />', () => {
    it('should match inline snapshot', () => {
        const { container } = render(
            <List inline>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
            </List>,
        );

        expect(container).toMatchSnapshot();
    });

    it('should match stacked snapshot', () => {
        const { container } = render(
            <List stacked>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
            </List>,
        );

        expect(container).toMatchSnapshot();
    });

    it('should match ol snapshot', () => {
        const { container } = render(
            <List as="ol" stacked>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
            </List>,
        );

        expect(container).toMatchSnapshot();
    });
});

describe('<ListItem />', () => {
    it('should match snapshot', () => {
        const { container } = render(<ListItem>List item</ListItem>);

        expect(container).toMatchSnapshot();
    });

    it('should match highlighted snapshot', () => {
        const { container } = render(
            <ListItem highlight>List item</ListItem>,
        );

        expect(container).toMatchSnapshot();
    });
});
