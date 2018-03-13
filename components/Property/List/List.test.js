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
      properties: [],
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
        image: Images.house,
        description: 'Description'
      }];
    });

    it("renders `PropertyListItem` components", () => {
      expect(propertyList().findAllByType(PropertyListItem).length).toBe(1);
    });

    it("passes the property `id` as a prop to `PropertyListItem`", () => {
      const propertyListItem = propertyList().findByType(PropertyListItem);
      expect(propertyListItem.props.id).toBe(props.properties[0].id);
    });

    it("passes the property `title` as a prop to `PropertyListItem`", () => {
      const propertyListItem = propertyList().findByType(PropertyListItem);
      expect(propertyListItem.props.title).toBe(props.properties[0].title);
    });

    it("passes the property `price` as a prop to `PropertyListItem`", () => {
      const propertyListItem = propertyList().findByType(PropertyListItem);
      expect(propertyListItem.props.price).toBe(props.properties[0].price);
    });

    it("passes the property `image` as a prop to `PropertyListItem`", () => {
      const propertyListItem = propertyList().findByType(PropertyListItem);
      expect(propertyListItem.props.image).toBe(props.properties[0].image);
    });

    it("passes the property `description` as a prop to `PropertyListItem`", () => {
      const propertyListItem = propertyList().findByType(PropertyListItem);
      expect(propertyListItem.props.description).toBe(props.properties[0].description);
    });

    it("sets the rendered `PropertyListItem`'s `onPress` prop to the same value as `onPressProperty`", () => {
      const propertyListItem = propertyList().findByType(PropertyListItem)
      expect(propertyListItem.props.onPressProperty).toBe(props.onPressProperty)
    })
  });

  describe("when `properties` is empty", () => {
    it("does not render any `PropertyListItem` components", () => {
      expect(propertyList().findAllByType(PropertyListItem).length).toBe(0);
    });
  });
  


})