import React from 'react';
import App from './App';
import Listings from './components/Listings';
import { Provider as PaperProvider } from 'react-native-paper';

import renderer from 'react-test-renderer';

describe("App", () => {
  let app = renderer.create(<App />).root

  it('renders a PaperProvider', () => {
    expect(app.findAllByType(PaperProvider).length).toEqual(1)
  });

  it('renders `Listings`', () => {
    expect(app.findAllByType(Listings).length).toEqual(1)
  });

  it('passes listings as a prop to `Listings`', () => {
    expect(app.findAllByType(Listings)[0].props.listings).toBeDefined()
  })

});
