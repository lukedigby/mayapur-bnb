import React from 'react';
import PropertyList from './List';
import PropertyListItem from './Item';
import { ScrollView, View, TouchableOpacity } from 'glamorous-native';
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
      onPressProperty: jest.fn()
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
        id: 1,
        title: 'Test Title',
        price: 500,
        image: Images.house
      }];
    });

    it("renders `PropertyListItem` components", () => {
      expect(propertyList().findAllByType(PropertyListItem).length).toBe(1);
    });

    it("passes the property title as a prop to `PropertyListItem`", () => {
      const propertyListItem = propertyList().findByType(PropertyListItem);
      expect(propertyListItem.props.title).toBe(props.properties[0].title);
    });

    it("passes the property price as a prop to `PropertyListItem`", () => {
      const propertyListItem = propertyList().findByType(PropertyListItem);
      expect(propertyListItem.props.price).toBe(props.properties[0].price);
    });

    it("passes the property image as a prop to `PropertyListItem`", () => {
      const propertyListItem = propertyList().findByType(PropertyListItem);
      expect(propertyListItem.props.image).toBe(props.properties[0].image);
    });

    it("sets the rendered `PropertyListItem`'s `onPress` prop to the same value as `onPressProperty`", () => {
      const propertyListItem = propertyList().findByType(PropertyListItem)
      expect(propertyListItem.props.onPressProperty).toBe(props.onPressProperty)
    })
  });

  describe("when `properties` is undefined", () => {
    it("does not render any `PropertyListItem` components", () => {
      expect(propertyList().findAllByType(PropertyListItem).length).toBe(0);
    });
  });
  


})