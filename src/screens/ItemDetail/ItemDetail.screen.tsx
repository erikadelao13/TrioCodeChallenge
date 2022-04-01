import React from 'react';
import { useRoute } from '@react-navigation/native';
import { ItemDetailView } from './ItemDetail.view';
import { TItemDetailRoute } from './ItemDetail.types';

export const ItemDetailScreen = () => {
  const route = useRoute<TItemDetailRoute>();
  const itemDetail = route.params;

  return (
    <ItemDetailView
      menuItemPrice={itemDetail.price}
      menuItemImage={itemDetail.url}
      menuItemName={itemDetail.name}
      menuItemDescription={itemDetail.description}
    />
  );
};
