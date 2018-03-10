import React from 'react';
import PropertyDetails from './Details';
import { View } from 'glamorous-native';

import renderer from 'react-test-renderer';

describe("PropertyDetails", () => {
  let renderedPropertyDetails;
  let props;
  
  const propertyDetails = () => {
    if (!renderedPropertyDetails) {
      renderedPropertyDetails = renderer.create(
        <PropertyDetails {...props} />
      );
    }
    return renderedPropertyDetails.root;
  }

  beforeEach(() => {
    props = {
    };
    renderedPropertyDetails = undefined;
  });

  it('always renders a `View`', () => {
    expect(propertyDetails().findAllByType(View).length).toEqual(1)
  })
})