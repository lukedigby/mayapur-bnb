import React from 'react';
import Listing from './Listing';
import { Card, CardCover, CardContent, Title, Paragraph } from 'react-native-paper';

import renderer from 'react-test-renderer';

describe("Listing", () => {
  let renderedListing;
  let props;
  
  const listing = () => {
    if (!renderedListing) {
      renderedListing = renderer.create(
        <Listing {...props} />
      );
    }
    return renderedListing.root;
  }

  beforeEach(() => {
    props = {
      description: 'Description',
      price: '500',
    };
    renderedListing = undefined;
  });

  it('always renders a `Card`', () => {
    expect(listing().findAllByType(Card).length).toEqual(1)
  })

  it('always renders a `CardCover`', () => {
    expect(listing().findAllByType(CardCover).length).toEqual(1)
  })

  describe('when `image` is passed', () => {
    beforeEach(() => {
      props.image = '../../assets/images/house.jpg'
    })
    
    it('passes `image` to the `CardCover` as `source`', () => {
      const cardCover = listing().findByType(CardCover)
    })
  })

  it('always renders a `CardContent`', () => {
    expect(listing().findAllByType(CardContent).length).toEqual(1)
  })

  it('always renders a `Title`', () => {
    expect(listing().findAllByType(Title).length).toEqual(1)
  })

  it("passes `description` to the rendered `Title` as `children`", () => {
    const title = listing().findByType(Title);
    expect(title.props.children).toBe(props.description);
  });

  it('always renders a `Paragraph`', () => {
    expect(listing().findAllByType(Paragraph).length).toEqual(1)
  })

  it('passes `price` to the rendered `Paragraph` as `children`', () => {
    const paragraph = listing().findByType(Paragraph)
    expect(paragraph.props.children).toContain(props.price)
  })


})
