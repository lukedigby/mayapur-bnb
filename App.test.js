import React from 'react';
import App from './App';
import PropertyList from './components/Property/List';
import { Provider as PaperProvider } from 'react-native-paper';

import renderer from 'react-test-renderer';

describe("App", () => {
  let app = renderer.create(<App />).root

  it('renders a PaperProvider', () => {
    expect(app.findAllByType(PaperProvider).length).toEqual(1)
  });

  it('renders `PropertyList`', () => {
    expect(app.findAllByType(PropertyList).length).toEqual(1)
  });

  it('passes `properties` as a prop to `PropertyList`', () => {
    expect(app.findAllByType(PropertyList)[0].props.properties).toBeDefined()
  })

});
