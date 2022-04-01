import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LogoImage } from '@components/LogoImage';
import { HomeScreen } from '@screens/Home';
import { ItemDetailScreen } from '@screens/ItemDetail';
import { moderateScale } from '@utils/scale';
import { APP_STACK_ROUTER } from '@constants/router.constants';

export type TAppStackParamsList = {
  [APP_STACK_ROUTER.HOME_SCREEN]: undefined;
  [APP_STACK_ROUTER.ITEMS_DETAIL_SCREEN]: {
    description: string;
    name: string;
    url: string;
    price: number;
  };
};

const AppStack = createStackNavigator<TAppStackParamsList>();

export const AppStackRouter = () => (
  <AppStack.Navigator
    screenOptions={{
      headerStyle: {
        height: moderateScale(120),
      },
    }}
    initialRouteName={APP_STACK_ROUTER.HOME_SCREEN}
  >
    <AppStack.Screen
      options={{ headerTitle: () => <LogoImage /> }}
      component={HomeScreen}
      name={APP_STACK_ROUTER.HOME_SCREEN}
    />
    <AppStack.Screen
      options={{
        presentation: 'modal',
        headerShown: false,
      }}
      component={ItemDetailScreen}
      name={APP_STACK_ROUTER.ITEMS_DETAIL_SCREEN}
    />
  </AppStack.Navigator>
);
