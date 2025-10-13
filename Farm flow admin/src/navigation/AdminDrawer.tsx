import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
// import SellerApprovalScreen from '../screens/Sellers/SellerApprovalScreen';
import AdminPanelSellerApplications from '../screens/Sellers/AdminPanelSellerApplications';
import UserListScreen from '../screens/Users/UserListScreen';
import OrderListScreen from '../screens/Orders/OrderListScreen';
import CategoryStack from './CategoryStack';

const Drawer = createDrawerNavigator();

export default function AdminDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      {/* <Drawer.Screen name="Seller Approvals" component={SellerApprovalScreen} /> */}
      <Drawer.Screen name="SellerApprovals" component={AdminPanelSellerApplications} />

      <Drawer.Screen name="Users" component={UserListScreen} />
      <Drawer.Screen name="Orders" component={OrderListScreen} />
      <Drawer.Screen name="Categories" component={CategoryStack} />
    </Drawer.Navigator>
  );
}
