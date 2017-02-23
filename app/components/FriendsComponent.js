'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const FriendsComponent = () => {
  return (
    <View style={styles.container}>
    <Text
        style={styles.exampleText}
        onPress={() => Actions.profile()}
      >
        Friends Component!!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#235233',
  },
  exampleText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default FriendsComponent;
