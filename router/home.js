import React, { Component } from 'react';
import { ScrollView, View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { Carousel } from 'antd-mobile';
// import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import styles from './home-style';


export default class Home extends Component {
  static navigationOptions = {
    title: 'hotl-manage'
  };

  state = {
    data: [
      { image: 1, text: 'test' },
      { image: 2, text: 'test' },
      { image: 3, text: 'test' }
    ],
    touchBoxData: [
      { id: 1, name: '实时房态', icon: 'bed', size: 60, color: '#f00' },
      { id: 2, name: '客房分配', icon: 'bed', size: 60, color: '#f00' },
      { id: 3, name: '房屋检查', icon: 'bed', size: 60, color: '#f00' },
      { id: 4, name: '低耗领用', icon: 'bed', size: 60, color: '#f00' },
      { id: 5, name: '工程报修', icon: 'bed', size: 60, color: '#f00' },
      { id: 6, name: '客留品登记', icon: 'bed', size: 60, color: '#f00' },
      { id: 7, name: '紧急情况', icon: 'bed', size: 60, color: '#f00' },
      { id: 8, name: '消息发送', icon: 'bed', size: 60, color: '#f00' },
      { id: 9, name: '考勤统计', icon: 'bed', size: 60, color: '#f00' },
      { id: 10, name: '工作统计', icon: 'bed', size: 60, color: '#f00' },
      { id: 11, name: '布草日记', icon: 'bed', size: 60, color: '#f00' },
    ],
    initialHeight: 200
  }

  render() {
    // const { navigate } = this.props.navigation;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
        <Carousel
          style={{ width: '100%', height: 150 }}
          className="my-carousel"
          autoplay={true}
          infinite
          selectedIndex={0}
          swipeSpeed={35}
        >
          {this.state.data.map((ii, index) => {
            const images = [
              require('../recoures/images/zhy1.jpg'),
              require('../recoures/images/zhy1.jpg'),
              require('../recoures/images/zhy1.jpg')
            ];
            return (
              <View key={ ii }>
                <Image source={images[index]} style={{ width: '100%', height: '100%' }} />
              </View>
            );
          })}
        </Carousel>
        <View style={styles.touchBoxContainer}>
          {this.state.touchBoxData.map((item, index) => {
            return (
              <TouchableHighlight key={item.id} style={[styles.touchBox, index % 3 === 2 ? styles.touchBox2 : styles.touchBox1]} underlayColor="#eee" onPress={() => navigate('Test')} >
                <View style={styles.boxContainer}>
                  <Text style={styles.boxText}>{item.name}</Text>
                  <IconFA size={item.size} name={item.icon} style={[styles.boxIcon, { color: item.color }]}></IconFA>
                </View>
              </TouchableHighlight>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
