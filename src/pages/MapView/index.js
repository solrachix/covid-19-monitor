import React from 'react';

import { Container, MapView } from './styles';

export default function MapViewComponent() {
  return (
    <Container>
      <MapView
        initialRegion={{
          longitude: -59.21405486762524,
          latitude: -16.932940136729304,
          latitudeDelta: 300,
          longitudeDelta: 300,
        }}
      />
    </Container>
  );
}