import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import ChevronLeftIcon from "@mdi/svg/svg/chevron-left.svg";
import ChevronLeftRight from "@mdi/svg/svg/chevron-right.svg";

import { withTheme } from '../config';
import Icon from '../icons/Icon';

function ListItemChevron({ containerStyle, ...props }) {
  return (
    <Icon
      type={Platform.OS === 'ios' ? 'ionicon' : 'material'}
      color="#D1D1D6"
      name={
        Platform.OS === 'ios' ? ChevronLeftIcon : ChevronLeftRight
      }
      size={16}
      containerStyle={StyleSheet.flatten([
        { alignSelf: 'center' },
        containerStyle,
      ])}
      {...props}
    />
  );
}

export default withTheme(ListItemChevron, 'ListItemChevron');
