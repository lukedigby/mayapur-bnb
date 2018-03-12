import React from 'react';
import PropertyListItem from './Item';
import { Card, CardCover, CardContent, Title, Paragraph } from 'react-native-paper';
import Images from '@assets/images'

import renderer from 'react-test-renderer';

describe("PropertyListItem", () => {
  let renderedPropertyListItem;
  let props;
  
  const propertyListItem = () => {
    if (!renderedPropertyListItem) {
      renderedPropertyListItem = renderer.create(
        <PropertyListItem {...props} />
      );
    }
    return renderedPropertyListItem.root;
  }

  beforeEach(() => {
    props = {
      title: 'Title',
      price: 500,
      onPressProperty: jest.fn()
    };
    renderedPropertyListItem = undefined;
  });

  it('always renders a `Card`', () => {
    expect(propertyListItem().findAllByType(Card).length).toEqual(1)
  })

  it('passes `onPressProperty` to the rendered `Card` as `onPress`', () => {
    const card = propertyListItem().findByType(Card)
    expect(card.props.onPress).toBe(props.onPressProperty)
  })

  it('always renders a `CardCover`', () => {
    expect(propertyListItem().findAllByType(CardCover).length).toEqual(1)
  })

  describe('when `image` is passed', () => {
    beforeEach(() => {
      props.image = Images.house
    })
    
    it('passes `image` to the `CardCover` as `source`', () => {
      const cardCover = propertyListItem().findByType(CardCover)
    })
  })

  it('always renders a `CardContent`', () => {
    expect(propertyListItem().findAllByType(CardContent).length).toEqual(1)
  })

  it('always renders a `Title`', () => {
    expect(propertyListItem().findAllByType(Title).length).toEqual(1)
  })

  it("passes `title` to the rendered `Title` as `children`", () => {
    const title = propertyListItem().findByType(Title);
    expect(title.props.children).toBe(props.title);
  });

  it('always renders a `Paragraph`', () => {
    expect(propertyListItem().findAllByType(Paragraph).length).toEqual(1)
  })

  it('passes `price` to the rendered `Paragraph` as `children`', () => {
    const paragraph = propertyListItem().findByType(Paragraph)
    expect(paragraph.props.children).toContain(props.price)
  })


})
