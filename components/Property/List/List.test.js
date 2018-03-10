import React from 'react';
import PropertyList from './List';
import PropertyListItem from './Item';
import { ScrollView, View } from 'glamorous-native';
import Images from '@assets/images'

import renderer from 'react-test-renderer';

describe("PropertyList", () => {
  let renderedPropertyList;
  let props;
  
  const propertyList = () => {
    if (!renderedPropertyList) {
      renderedPropertyList = renderer.create(
        <PropertyList {...props} />
      );
    }
    return renderedPropertyList.root;
  }

  beforeEach(() => {
    props = {
      properties: undefined,
    };
    renderedPropertyList = undefined;
  });

  it('always renders a `ScrollView`', () => {
    expect(propertyList().findAllByType(ScrollView).length).toEqual(1)
  })

  it('always renders a `View`', () => {
    expect(propertyList().findAllByType(View).length).toEqual(1)
  })

  describe("when `properties` is passed", () => {
    beforeEach(() => {
      props.properties = [{
        description: 'Test Description',
        price: '500',
        image: Images.house
      }];
    });

    it("renders `PropertyListItem` components", () => {
      expect(propertyList().findAllByType(PropertyListItem).length).toBe(1);
    });

    it("passes the property description as a prop to `PropertyListItem`", () => {
      const propertyListItem = propertyList().findByType(PropertyListItem);
      expect(propertyListItem.props.description).toBe(props.properties[0].description);
    });

    it("passes the property price as a prop to `PropertyListItem`", () => {
      const propertyListItem = propertyList().findByType(PropertyListItem);
      expect(propertyListItem.props.price).toBe(props.properties[0].price);
    });

    it("passes the property image as a prop to `PropertyListItem`", () => {
      const propertyListItem = propertyList().findByType(PropertyListItem);
      expect(propertyListItem.props.image).toBe(props.properties[0].image);
    });
  });

  describe("when `properties` is undefined", () => {
    it("does not render any `PropertyListItem` components", () => {
      expect(propertyList().findAllByType(PropertyListItem).length).toBe(0);
    });
  });

})