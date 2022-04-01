import React, { useEffect, useState } from 'react';
import { getMenuItems } from '../../api/services';
import { HomeView } from './Home.view';

export const HomeScreen = () => {
  const [itemData, setItemData] = useState(null);
  useEffect(() => {
    (async () => {
      const items = await getMenuItems();
      setItemData(items?.data?.menus);
    })();
  }, []);

  return <HomeView itemData={itemData} />;
};
