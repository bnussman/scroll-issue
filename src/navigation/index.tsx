import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { List } from './screens/List';

const Drawer = createDrawerNavigator({
  screens: {
    Home: {
      screen: Home,
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    Drawer: {
      screen: Drawer,
      options: {
        headerShown: false,
      },
    },
    List: List,
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
