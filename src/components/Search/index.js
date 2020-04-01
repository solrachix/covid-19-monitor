import React from 'react';

import { Container, Input, ContainerIcon, Icon } from './styles';

export default function Search({ ...props }) {
  return (
    <Container>
      <Input { ...props } />
      <ContainerIcon>
        <Icon name="ios-search" size={20} />
      </ContainerIcon>
    </Container>
  );
}
