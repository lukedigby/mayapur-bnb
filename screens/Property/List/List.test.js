import React from 'react';
import ScreensPropertyList from './List';
import PropertyList from '../../../components/Property/List';
import ScreensLayout from '../../Layout';

import renderer from 'react-test-renderer';

describe("ScreensPropertyList", () => {
  fetch = jest.fn(() => new Promise(resolve => resolve()));
  let screensPropertyList = renderer.create(<ScreensPropertyList />).root

  it('calls `loadProperties`', () => {
    expect(fetch.mock.calls.length).toBe(1)
  });

  it('renders a `ScreensLayout`', () => {
    expect(screensPropertyList.findAllByType(ScreensLayout).length).toEqual(1)
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
