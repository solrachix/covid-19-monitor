import React from 'react';
import { Marker } from 'react-native-maps';

import { Container, MapView, MarkerComponent, CalloutComponent, Bubble } from './styles';

export default function MapViewComponent({ route }) {
  const allCountriesList = route.params.allCountriesList;
  const selectedCountry = route.params.selectedCountry;

  return (
    <Container>
      <MapView
        loadingEnabled = {true}
        showsCompass={true}
        provider="google"

        initialRegion={{
          longitude: selectedCountry ? selectedCountry.long : 0,
          latitude: selectedCountry ? selectedCountry.lat : 0,
          latitudeDelta: 50,
          longitudeDelta: 50,
        }}
      >
        {allCountriesList &&
          allCountriesList.map(({ deaths, country, countryInfo }) => deaths > 1000 ? (
            <MarkerComponent key={countryInfo._id + country + countryInfo.lat} coordinate={{ latitude: countryInfo.lat, longitude: countryInfo.long, }}>
              <Bubble style={{
                width: deaths * 0.01,
                height: deaths * 0.01,
              }}/>

              {/* <CalloutComponent onPress={ () => {
                // navegação
                navigation.navigate('Profile', { github_username })
              }}>
                <View style={styles.callout}>
                  <Text style={styles.devName}>{ name }</Text>
                  <Text style={styles.devBio}>{ bio }</Text>
                  <Text style={styles.devTechs}>{ techs.join(', ') }</Text>
                </View>
              </CalloutComponent> */}
            </MarkerComponent>
          ): null )
        }
        
      </MapView>
    </Container>
  );
}