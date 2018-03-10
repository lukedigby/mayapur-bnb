import React from 'react';
import ScreensPropertyList from './List';
import PropertyList from '../../../components/Property/List';
import { Provider as PaperProvider } from 'react-native-paper';

import renderer from 'react-test-renderer';

describe("ScreensPropertyList", () => {
  let screensPropertyList = renderer.create(<ScreensPropertyList />).root

  it('renders a PaperProvider', () => {
    expect(screensPropertyList.findAllByType(PaperProvider).length).toEqual(1)
  });

  it('renders `PropertyList`', () => {
    expect(screensPropertyList.findAllByType(PropertyList).length).toEqual(1)
  });

  it('passes `properties` as a prop to `PropertyList`', () => {
    expect(screensPropertyList.findAllByType(PropertyList)[0].props.properties).toBeDefined()
  })

  it('passes `onPressProperty` as a prop to `PropertyList`', () => {
    expect(screensPropertyList.findAllByType(PropertyList)[0].props.onPressProperty).toBeDefined()
  })

});
