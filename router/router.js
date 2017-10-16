import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './home';
<<<<<<< HEAD
import Test from './test';
=======
import RoomStatus from './room-status';

>>>>>>> b086b3e9443397125a836b3ad388d8e397addcee

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
