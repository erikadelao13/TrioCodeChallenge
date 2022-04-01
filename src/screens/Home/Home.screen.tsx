import React, { useEffect, useState } from 'react';
import { getMenuItems } from '@services/services';
import { ErrorComponent } from '@components/ErrorComponent';
import { Loading } from '@components/Loading';
import { HomeView } from './Home.view';

export const HomeScreen = () => {
  const [isLoading, setIsloading] = useState(false);
  const [itemData, setItemData] = useState(null);
  const [getMenuItemsError, setGetMenuItemsError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsloading(true);
        const items = await getMenuItems();
        setItemData(items?.data?.menus);
        setIsloading(false);
      } catch (error) {
        setGetMenuItemsError(error);
        setIsloading(false);
      }
    })();
  }, []);

  if (getMenuItemsError) return <ErrorComponent />;
  if (isLoading) return <Loading />;
  return <HomeView itemData={itemData} />;
};
