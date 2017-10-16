/**
 * 房态组件
 */
import { Component } from 'react';

export default class RoomStatus extends Component {
  componentWillMount() {
    this.setState();
  }

  state = {
    status: 'defulat',
    roomNum: '0000',
    roomType: '普通',
    roomGuest: 'XXX',
    isClock: false,
    isWillLeave: false
  }

  render() {

  }
}
