import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeText: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    backfaceVisibility: 'hidden',
    bottom: 30,
    // left: 50,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  }
});
export default class Home extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, borderColor: '#ccc', borderWidth: 1 }} >
            <Image source={require('../recoures/images/zhy1.jpg')} style={{ width: '100%', height: '100%' }} />
            <Text style={styles.homeText}>实时房态</Text>
          </View>
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
