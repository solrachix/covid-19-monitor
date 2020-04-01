import IntlProvider from 'react-intl';

import React, { useState } from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Routes from './src/routes';
import {name as appName} from './app.json';

import Light from './src/styles/themes/light';

export default function App() {
  const [theme, setTheme] = useState(Light);
  return (
    <IntlProvider locale="en">
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
        <Routes theme={theme} /> 
      </ThemeProvider>
    </IntlProvider>
  );
}

console.disableYellowBox = false

AppRegistry.registerComponent(appName, () => App);