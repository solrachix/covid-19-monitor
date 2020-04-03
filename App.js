import 'intl';
import 'intl/locale-data/jsonp/en';
import { IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl-native'

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
        {/* <FormattedMessage
          id={5555555}
          defaultMessage="bom"
          style={{ fontWeight: 'bold' }} /> */}
      </ThemeProvider>
    </IntlProvider>
  );
}

console.disableYellowBox = false

AppRegistry.registerComponent(appName, () => App);