import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './home';
import Test from './test';
import RoomStatus from './room-status';


const Router = StackNavigator(
  {
    RoomStatus: {
      name: 'Stack Example',
      description: 'A card stack',
      screen: Home
    },
    Test: {
      name: 'Test',
      description: 'this is test',
      screen: Test
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
