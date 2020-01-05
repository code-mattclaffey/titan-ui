import React from 'react';
import { List, ListItem } from '.';

export default {
    title: 'Lists',
    componentSubtitle: 'Lists styles',
};

export const inlineList = () => (
    <List inline>
        <ListItem>List item</ListItem>
        <ListItem highlight>List item</ListItem>
        <ListItem>List item</ListItem>
    </List>
);

export const orderedList = () => (
    <List as="ol">
        <ListItem>List item</ListItem>
        <ListItem highlight>List item</ListItem>
        <ListItem>List item</ListItem>
    </List>
);

export const stackedList = () => (
    <List stacked>
        <ListItem>List item</ListItem>
        <ListItem highlight>List item</ListItem>
        <ListItem>List item</ListItem>
    </List>
);
