import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ headerText }) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {headerText}
      </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F1F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 8, height: 30 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  }
};

export default Header;
