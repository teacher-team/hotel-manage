import React, { Component } from 'react';
import { View } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, borderColor: '#ccc', borderWidth: 1 }} />
          <View style={{ flex: 1, borderColor: '#ccc', borderWidth: 1 }} />
          <View style={{ flex: 1, borderColor: '#ccc', borderWidth: 1 }} />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, borderColor: '#ccc', borderWidth: 1 }} />
          <View style={{ flex: 1, borderColor: '#ccc', borderWidth: 1 }} />
          <View style={{ flex: 1, borderColor: '#ccc', borderWidth: 1 }} />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, borderColor: '#ccc', borderWidth: 1 }} />
          <View style={{ flex: 1, borderColor: '#ccc', borderWidth: 1 }} />
          <View style={{ flex: 1, borderColor: '#ccc', borderWidth: 1 }} />
        </View>
      </View>
    );
  }
}
