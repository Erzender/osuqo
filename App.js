import StorybookUI from "./storybook";

import App from "./src/App";

module.exports = process.env.REACT_NATIVE_STORYBOOK ? StorybookUI : App;