import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './home';

const Router = StackNavigator(
  {
    Home: {
      name: 'Stack Example',
      description: 'A card stack',
      screen: Home
    }
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card'
  }
);

export default Router;
