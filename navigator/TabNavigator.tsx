import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomersScreen from '../screens/CustomersScreen';
import OrdersScreen from '../screens/Orders.Screen';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator screenOptions={({ route }) => ({})}>
      <Tab.Screen name="Customers" component={CustomersScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
