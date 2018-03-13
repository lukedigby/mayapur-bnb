import React from 'react';
import PropertyListItem from './Item';
import { Card, CardCover, CardContent, Title, Paragraph } from 'react-native-paper';
import Images from '@assets/images'

import renderer from 'react-test-renderer';

describe("PropertyListItem", () => {
  let renderedPropertyListItem;
  let props;
  let renderedInstance;
  
  const propertyListItem = () => {
    if (!renderedPropertyListItem) {
      renderedPropertyListItem = renderer.create(
        <PropertyListItem {...props} />
      );
    }
    renderedInstance = renderedPropertyListItem.getInstance()
    return renderedPropertyListItem.root;
  }

  beforeEach(() => {
    props = {
      id: 1,
      title: 'Title',
      price: 500,
      image: Images.house,
      onPressProperty: jest.fn()
    };
    renderedPropertyListItem = undefined;
  });

  it('always renders a `Card`', () => {
    expect(propertyListItem().findAllByType(Card).length).toEqual(1)
  })

  it('passes `onPress` to the rendered `Card` as `onPress`', () => {
    const card = propertyListItem().findByType(Card)
    expect(card.props.onPress).toEqual(renderedInstance.onPress)
  })

  it('always renders a `CardCover`', () => {
    expect(propertyListItem().findAllByType(CardCover).length).toEqual(1)
  })

  it('passes `image` to the `CardCover` as `source`', () => {
    const cardCover = propertyListItem().findByType(CardCover)
    expect(cardCover.props.source).toEqual(props.image)
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
