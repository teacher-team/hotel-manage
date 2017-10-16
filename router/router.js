import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './home';
import RoomStatus from './room-status';


const Router = StackNavigator(
  {
    RoomStatus: {
      name: 'Stack Example',
      description: 'A card stack',
      screen: Home
    }
  },
  {
    RoomStatus: {
      name: 'Stack Example',
      description: 'A card stack',
      screen: RoomStatus
    }
  },
  {
    initialRouteName: 'RoomStatus',
    mode: Platform.OS === 'ios' ? 'modal' : 'card'
  }
);

export default Router;
