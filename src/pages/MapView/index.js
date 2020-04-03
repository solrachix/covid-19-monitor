import React from 'react';

import mapTheme from '../../assets/mapTheme.json';

import BackComponent from '../../components/BackComponent';
import { Container, MapView, MarkerComponent, CalloutComponent, Bubble, Text } from './styles';

export default function MapViewComponent({ navigation, route }) {
  const allCountriesList = route.params.allCountriesList;
  const selectedCountry = route.params.selectedCountry;
  
  return (
    <Container>
      <BackComponent onPress={() => navigation.goBack() }/>
      <MapView
        loadingEnabled = {true}
        showsCompass={true}
        provider="google"
        customMapStyle={mapTheme}

        initialRegion={{
          longitude: selectedCountry ? selectedCountry.long : 0,
          latitude: selectedCountry ? selectedCountry.lat : 0,
          latitudeDelta: 50,
          longitudeDelta: 50,
        }}
      >
        {allCountriesList &&
          allCountriesList.map(({ casesPerOneMillion, cases, recovered, deaths, country, countryInfo }) => deaths > 1000 ? (
            <MarkerComponent key={countryInfo._id + country + countryInfo.lat} coordinate={{ latitude: countryInfo.lat, longitude: countryInfo.long, }}>
              <Bubble style={{
                width: deaths * 0.01,
                height: deaths * 0.01,
              }}/>

              <CalloutComponent>
                <Text title>{ country }</Text>
                <Text>Confirmed: { cases }</Text>
                <Text>Deaths: { deaths }</Text>
                <Text>Recovered: { recovered }</Text>
                <Text>Cases Per One Million: { casesPerOneMillion }</Text>
              </CalloutComponent>
            </MarkerComponent>
          ): null )
        }
        
      </MapView>
    </Container>
  );
}