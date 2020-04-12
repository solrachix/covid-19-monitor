import React, { memo } from 'react';

import transformData from '../../utils/transformDate';
import RoundAndSortNumbers from '../../utils/RoundAndSortNumbers';

import mapTheme from '../../assets/mapTheme.json';

import BackComponent from '../../components/BackComponent';
import { Container, MapView, MarkerComponent, CalloutComponent, Tooltip, Bubble, Text } from './styles';

function MapViewComponent({ navigation, route }) {
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
          allCountriesList.map(({ deathsPerOneMillion, casesPerOneMillion, cases, recovered, deaths, country, countryInfo, updated }) => cases > 100 ? (
            <MarkerComponent key={countryInfo._id + country + countryInfo.lat} coordinate={{ latitude: countryInfo.lat, longitude: countryInfo.long, }}>
              <Bubble style={{
                width: deaths * 0.01,
                height: deaths * 0.01,
              }}/>

              <CalloutComponent tooltip={true}>
                <Tooltip>
                  <Text title>{ country }</Text>
                  <Text subtitle> Last update: &nbsp;
                    <Text subtitle featured>{ transformData(updated) }</Text>
                  </Text>

                  <Text>Confirmed: <Text featured>{ Decimal(cases) }</Text></Text>
                  <Text>Deaths: <Text featured>{ Decimal(deaths) }</Text></Text>
                  <Text>Recovered: <Text featured>{ Decimal(recovered) }</Text></Text>
                  <Text>Cases Per One Million: <Text featured>{ Decimal(casesPerOneMillion) }</Text></Text>
                  <Text>Deaths Per One Million: <Text featured>{ Decimal(deathsPerOneMillion) }</Text></Text>
                </Tooltip>
              </CalloutComponent>
            </MarkerComponent>
          ): null )
        }
        
      </MapView>
    </Container>
  );
}

const Decimal = number => RoundAndSortNumbers({
    number,
    billion: {
      decimal: 1,
      unit: 'B'
    },
    million: {
      decimal: 1,
      unit: 'M',
    },
    thousand: {
      decimal: 1,
      unit: 'K',
    },
  })


export default memo(MapViewComponent);