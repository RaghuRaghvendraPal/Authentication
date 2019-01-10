import React from 'react';
import { View, Text } from 'react-native';
import CardSection from './CardSection';
import Card from './Card';
import Button from './Button';

const LoginInfo = () => {
  const { headerStyle,
          textHeaderStyle,
          viewStyle
        } = styles;
  return (
    <Card style={viewStyle}>
      <CardSection>
        <View style={headerStyle}>
          <Text style={textHeaderStyle}>Email</Text>
          <Text>Email</Text>
        </View>
      </CardSection>
      <CardSection>
        <View style={headerStyle}>
          <Text style={textHeaderStyle}>Password</Text>
          <Text>Password</Text>
        </View>
      </CardSection>
      <CardSection>
        <Button>
        Login
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerStyle: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  viewStyle: {
    justifyContent: 'space-around'
  },
  textHeaderStyle: {
    fontSize: 18
  }
};

export default LoginInfo;
