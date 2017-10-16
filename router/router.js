import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './home';
import Test from './test';

const Router = StackNavigator(
  {
    Home: {
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
    initialRouteName: 'Home',
    // headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card'
  }
);

export default Router;
