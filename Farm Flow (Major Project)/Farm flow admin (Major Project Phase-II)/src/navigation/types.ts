import { UserOrder } from '../types/models';


export type AdminDrawerParamList = {
  Dashboard: undefined;
  SellerApprovals: undefined;
  Users: undefined;
  Orders: undefined;
  Categories: undefined;
};

export type MainStackParamList = {
  Drawer: undefined;
  //UserInfo: undefined;
  UserInfo: { user: UserOrder }; 
};

export type AuthStackParamList = {
  Login: undefined;
};