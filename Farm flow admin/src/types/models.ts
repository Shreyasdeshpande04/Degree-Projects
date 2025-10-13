import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface AdminDoc {
  adminId: string;
  name: string;
  email: string;
  phone: string;
  roles: ['admin'];
  createdAt: FirebaseFirestoreTypes.Timestamp;
}

export interface SellerApplicationDoc {
  uid: string;
  businessName: string;
  businessType: string;
  gstin: string;
  pan: string;
  businessAddress: string;
  contactNumber: string;
  businessEmail: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  createdAt: FirebaseFirestoreTypes.Timestamp;
  reviewedAt?: FirebaseFirestoreTypes.Timestamp;
  reviewedBy?: string;
  referenceNumber?: string;
}

export interface UserDoc {
  userId: string;
  name: string;
  // The role array as stored in profile/main
  role: string[];
  // createdAt: FirebaseFirestoreTypes.Timestamp;
}

export interface CategoryDoc {
  id: string;
  label: string;
  icon: string;
  // Add more fields in the future as needed (e.g., order, color, metadata)
}


export type UserOrder = {
  id: string;
  orderId: string;
  name: string;
  productName: string; // comma-separated product names
  status: string;
  price: number;       // total price
  address: string;
};

