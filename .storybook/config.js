import { configure } from "@storybook/react";
import { addParameters, addDecorator } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { setConsoleOptions } from '@storybook/addon-console';
import { withA11y } from '@storybook/addon-a11y';
import { withStaticMarkup } from 'storybook-react-to-static-markup';
import theme from './theme';
import './storybook.css';

addDecorator(withStaticMarkup);
addDecorator(withA11y);

setConsoleOptions({
    panelExclude: [],
});


addParameters({
    options: {
        theme,
    },
    docs: {
        container: DocsContainer,
        page: DocsPage
    }
});

configure(require.context("../src/components", true, /\.stories\.jsx$/), module);

