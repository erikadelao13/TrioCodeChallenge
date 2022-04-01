import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/Home/Home.screen';
import { ItemDetailScreen } from '../screens/ItemDetail/ItemDetail.screen';
import { moderateScale } from '../utils/scale';
import { APP_STACK_ROUTER } from '../constants/router.constants';
import { LogoImage } from '../components/LogoImage';

export type TAppStackParamsList = {
  [APP_STACK_ROUTER.HOME_SCREEN]: undefined;
  [APP_STACK_ROUTER.ITEMS_DETAIL_SCREEN]: undefined;
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
      component={ItemDetailScreen}
      name={APP_STACK_ROUTER.ITEMS_DETAIL_SCREEN}
    />
  </AppStack.Navigator>
);