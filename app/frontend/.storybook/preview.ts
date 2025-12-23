import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";
import { initialize, mswLoader } from "msw-storybook-addon";

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {},
  },

  loaders: [mswLoader],
};

export default preview;
