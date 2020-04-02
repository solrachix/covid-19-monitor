import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets  } from '@react-navigation/stack';

import { ThemeContext } from 'styled-components';

import Main from './pages/Main';
import LineChart from './pages/LineChart';
import CountriesList from './pages/CountriesList';
import WebViewRender from './pages/WebViewRender';
import MapView from './pages/MapView';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  const themeContext = useContext(ThemeContext).colors;
  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: themeContext.text,
          headerStyle: {
              backgroundColor: themeContext.secundary,
              height: 60,
              elevation: 0
          },
          gestureEnabled: true,
          cardOverlayEnabled: true,                    
          ...TransitionPresets.ModalPresentationIOS,
      }}    
      mode="modal"
    >
        <Screen
          name="Main"
          component={Main}
          options={{
            title: 'COVID-19 Monitor',
          }}
        />
        <Screen
          name="LineChart"
          component={LineChart}
          options={{
            title: 'Line Chart',
          }}
        />
        <Screen
          name="CountriesList"
          component={CountriesList}
          options={{
            title: 'Countries List',
            headerLeft: () => {}
            // header: () => {}
          }}
        />

        <Screen
          name="MapView"
          component={MapView}
          options={{
            title: 'Map View',
          }}
        />

        <Screen
          name="WebViewRender"
          component={WebViewRender}
          options={{
            title: 'Web View',
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
