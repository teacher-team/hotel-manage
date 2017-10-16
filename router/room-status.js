/**
 * 房态路由
 */
import React, { Component } from 'react';
import { Button } from 'antd-mobile';

export default class RoomStatus extends Component {
  static navigationOptions = {
    title: '酒店房态'
  };

  render() {
    return (
      <Button type="primary" inline size="small">inline small</Button>
    );
  }
}
