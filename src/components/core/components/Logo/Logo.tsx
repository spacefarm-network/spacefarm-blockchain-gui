import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { Spacefarm } from '@spacefarm/icons';

const StyledSpacefarm = styled(Spacefarm)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledSpacefarm />
    </Box>
  );
}
