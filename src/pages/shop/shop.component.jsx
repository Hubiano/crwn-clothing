import React from 'react';
import { Route } from 'react-router-dom'

import CollectionOverview from '../../components/collections-overview/collections-overview.components';
import CollectionPage from '../collection/collection.component';
import SingleProductPage from '../single-product/single-product.component';


const ShopPage = ({ match }) => {
  console.log(match)
  return (
      <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
      <Route exact path={`${match.path}/:collectionId/:items/:id`} component={SingleProductPage} />
      </div>
  )
};


export default (ShopPage);