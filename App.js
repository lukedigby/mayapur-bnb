import React from 'react';
import ScreensPropertyList from './screens/Property/List';
import ScreensPropertyDetails from './screens/Property/Details';
import { StackNavigator } from 'react-navigation';
import ScreensLayoutHeader from './screens/Layout/Header'

const App = StackNavigator(
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

export default App