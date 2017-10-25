/*
 * @Author: 陈国栋 
 * @Date: 2017-10-17 21:35:39 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-10-17 23:35:56
 */

import { StyleSheet } from 'react-native';
import config from '../recoures/config';

module.exports = StyleSheet.create({
  navText: {
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    bottom: 50
  },
  homeText: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    backfaceVisibility: 'hidden',
    bottom: 30,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  touchBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: config.size.width,
    borderTopWidth: config.pixel,
    borderTopColor: '#ccc',
    borderLeftWidth: config.pixel,
    borderLeftColor: '#ccc',
    borderRightWidth: config.pixel,
    borderRightColor: '#ccc'
  },
  touchBox: {
    width: (config.size.width / 3) - 0.33334,
    height: config.size.width / 3,
    backgroundColor: '#f3f3f3'
  },
  touchBox1: {
    borderBottomWidth: config.pixel,
    borderBottomColor: '#ccc',
    borderRightWidth: config.pixel,
    borderRightColor: '#ccc'
  },
  touchBox2: {
    borderBottomWidth: config.pixel,
    borderBottomColor: '#ccc'
    // borderRightWidth: config.pixel,
    // borderRightColor: '#ccc'
    // borderLeftWidth: config.pixel,
    // borderLeftColor: '#ccc'
  },
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: config.size.width / 3,
    height: config.size.width / 3
  },
  boxIcon: {
    position: 'absolute',
    top: 10
  },
  boxText: {
    position: 'absolute',
    bottom: 15,
    width: config.size.width / 3,
    textAlign: 'center',
    left: 0,
    backgroundColor: 'transparent'
  }
});
