import React from 'react';
import PropTypes from 'prop-types';
import AccountBoxIcon from "@mdi/svg/svg/account-box.svg";

import Icon from '../icons/Icon';

const CheckBoxIcon = ({
  checked,
  onIconPress,
  onLongIconPress,
  size,
  checkedIcon,
  uncheckedIcon,
  checkedColor,
  uncheckedColor,
}) => {
  if (checked && React.isValidElement(AccountBoxIcon)) {
    return AccountBoxIcon;
  }

  if (!checked && React.isValidElement(AccountBoxIcon)) {
    return AccountBoxIcon;
  }

  return (
    <Icon
      color={checked ? checkedColor : uncheckedColor}
      name={checked ? AccountBoxIcon : AccountBoxIcon}
      size={size || 24}
      style={{ minWidth: size || 24 }}
      onLongPress={onLongIconPress}
      onPress={onIconPress}
    />
  );
};

CheckBoxIcon.propTypes = {
  checked: PropTypes.bool,
  onIconPress: PropTypes.func,
  onLongIconPress: PropTypes.func,
  size: PropTypes.number,
  checkedIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  uncheckedIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  iconType: PropTypes.string,
  checkedColor: PropTypes.string,
  uncheckedColor: PropTypes.string,
};

export default CheckBoxIcon;
