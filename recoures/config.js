/*
 * @Author: 陈国栋 
 * @Date: 2017-10-17 20:43:52 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-10-17 20:54:42
 */
import { PixelRatio, Dimensions } from 'react-native';


module.exports = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
};
