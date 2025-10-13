import firestore from '@react-native-firebase/firestore';

export const fetchDashboardData = async () => {
  try {
    const usersSnapshot = await firestore().collection('userVerificationRecords').get();
    const ordersSnapshot = await firestore().collection('orders').get();
    const sellerSnapshot = await firestore().collection('sellerApplications').get();
    console.log(sellerSnapshot.size);

    return {
      userCount: usersSnapshot.size,
      orderCount: ordersSnapshot.size,
      sellerCount: sellerSnapshot.size,
    };
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error);
    return {
      userCount: 0,
      orderCount: 0,
      sellerCount: 0,
    };
  }
};
