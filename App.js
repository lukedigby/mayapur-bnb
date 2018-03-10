import React from 'react';
import ScreensPropertyList from './screens/Property/List';
import ScreensPropertyDetail from './screens/Property/Detail';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Home: { screen: ScreensPropertyList },
  Detail: { screen: ScreensPropertyDetail }
})

export default App