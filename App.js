import React from 'react';
import ScreensPropertyList from './screens/Property/List';
import ScreensPropertyDetails from './screens/Property/Details';
import ScreensModal from './screens/Modal';
import { StackNavigator } from 'react-navigation';
import ScreensLayoutHeader from './screens/Layout/Header'
import Images from '@assets/images';

const MainStack = StackNavigator(
  {
    Home: { screen: ScreensPropertyList },
    Details: { screen: ScreensPropertyDetails }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: ScreensLayoutHeader
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
      },
      screenInterpolator: ({ layout, position, scene }) => {
          const { index } = scene;

          const translateX = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [layout.initWidth, 0, 0]
          });

          const opacity = position.interpolate({
              inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
              outputRange: [0, 1, 1, 0.3, 0]
          });

          return { transform: [{ translateX }] }
      }
    })
  }
)

const App = StackNavigator(
  {
    Main: {
      screen: MainStack
    },
    Modal: {
      screen: ScreensModal
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
      },
      screenInterpolator: ({ layout, position, scene }) => {
          const { index } = scene;

          const translateY = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [layout.initHeight, 0, 0]
          });

          const opacity = position.interpolate({
              inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
              outputRange: [0, 1, 1, 0.3, 0]
          });

          return { transform: [{ translateY }] }
      }
    })
  }
)

export default App