import firestore from '@react-native-firebase/firestore';
import { UserOrder } from '../types/models';

export const fetchOrders = async (): Promise<UserOrder[]> => {
  try {
    const snapshot = await firestore().collection('orders').get();
    const users: UserOrder[] = [];

    for (const doc of snapshot.docs) {
      const data = doc.data();

      const products = data?.products ?? [];
      const productNames = products.map((p: any) => p.name).join(', ');
      console.log(productNames);

      users.push({
        id: doc.id,
        orderId: data.orderId ?? 'N/A',
        name: data?.address?.recipient ?? 'N/A',
        productName: productNames || 'No products',
        status: data?.status ?? 'Pending',
        price: data?.total ?? 'N/A',
        address: data?.address?.addressLine1 ?? 'N/A',
      });
      
    }

    return users;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};


