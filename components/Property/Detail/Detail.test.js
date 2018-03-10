import React from 'react';
import PropertyDetail from './Detail';
import { View } from 'glamorous-native';

import renderer from 'react-test-renderer';

describe("PropertyDetail", () => {
  let renderedPropertyDetail;
  let props;
  
  const propertyDetail = () => {
    if (!renderedPropertyDetail) {
      renderedPropertyDetail = renderer.create(
        <PropertyDetail {...props} />
      );
    }
    return renderedPropertyDetail.root;
  }

  beforeEach(() => {
    props = {
    };
    renderedPropertyDetail = undefined;
  });

  it('always renders a `View`', () => {
    expect(propertyDetail().findAllByType(View).length).toEqual(1)
  })
})