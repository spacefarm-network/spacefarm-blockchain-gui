import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as SpacefarmIcon } from './images/spacefarm.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={SpacefarmIcon} viewBox="0 0 150 58" {...props} />;
}
