import React from 'react';
import Listings from './Listings';
import Listing from '../Listing';
import { ScrollView, View } from 'glamorous-native';

import renderer from 'react-test-renderer';

describe("Listings", () => {
  let renderedListings;
  let props;
  
  const listings = () => {
    if (!renderedListings) {
      renderedListings = renderer.create(
        <Listings {...props} />
      );
    }
    return renderedListings.root;
  }

  beforeEach(() => {
    props = {
      listings: undefined,
    };
    renderedListings = undefined;
  });

  it('always renders a `ScrollView`', () => {
    expect(listings().findAllByType(ScrollView).length).toEqual(1)
  })

  it('always renders a `View`', () => {
    expect(listings().findAllByType(View).length).toEqual(1)
  })

  describe("when `listings` is passed", () => {
    beforeEach(() => {
      props.listings = [{
        description: 'Test Description',
        price: '500',
        image: '../../assets/images/house.jpg'
      }];
    });

    it("renders `Listing` components", () => {
      expect(listings().findAllByType(Listing).length).toBe(1);
    });

    it("passes the listing description as a prop to `Listing`", () => {
      const listing = listings().findByType(Listing);
      expect(listing.props.description).toBe(props.listings[0].description);
    });

    it("passes the listing price as a prop to `Listing`", () => {
      const listing = listings().findByType(Listing);
      expect(listing.props.price).toBe(props.listings[0].price);
    });

    it("passes the listing image as a prop to `Listing`", () => {
      const listing = listings().findByType(Listing);
      expect(listing.props.image).toBe(props.listings[0].image);
    });
  });

  describe("when `listings` is undefined", () => {
    it("does not render any `Listing` components", () => {
      expect(listings().findAllByType(Listing).length).toBe(0);
    });
  });

})