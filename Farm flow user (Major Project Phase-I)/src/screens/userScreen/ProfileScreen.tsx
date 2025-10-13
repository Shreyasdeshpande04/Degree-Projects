import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Constants for colors, fonts, and other UI properties
const COLORS = {
  primaryBackground: '#0C0C0E',
  secondaryBackground: '#16161A',
  accentColor: '#00FFC3',
  textColor: '#FFFFFF',
  subtitleTextColor: '#AAAAAA',
  sectionTitleColor: '#888',
  actionButtonBackground: '#1E1E1E',
  actionButtonBorder: '#1A1A1A',
  logoutButtonBackground: '#1C1C1E',
  logoutButtonTextColor: '#FF6B6B',
  logoutButtonBorderColor: '#FF6B6B50',
};

const FONTS = {
  title: { fontSize: 24, fontWeight: '700' },
  subtitle: { fontSize: 16, fontWeight: '600' },
  body: { fontSize: 14, fontWeight: '400' },
  buttonText: { fontSize: 16, fontWeight: '500' },
  logoutText: { fontSize: 15, fontWeight: '600' },
};

const SPACING = {
  verticalPadding: 50,
  horizontalPadding: 24,
  sectionPadding: 30,
  logoutButtonPadding: 12,
  actionButtonPadding: 16,
};

// Profile data and action buttons
const profileData = {
  name: "Alex Morgan",
  email: "alex@example.com",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
};

const actionButtons = [
  { id: 1, title: "Orders", icon: "receipt-outline" },
  { id: 2, title: "Wishlist", icon: "heart-outline" },
  { id: 3, title: "Edit Profile", icon: "create-outline" },
  { id: 4, title: "Saved Address", icon: "location-outline" },
  { id: 5, title: "Sell on Farmflow", icon: "storefront-outline" },
  { id: 6, title: "Become a Chef Star", icon: "star-outline" },
];

// Profile Header Component
const ProfileHeader = ({ name, email, avatar }) => (
  <View style={styles.profileHeader}>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.email}>{email}</Text>
  </View>
);

// Action Button Component
const ActionButton = ({ title, icon }) => (
  <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
    <View style={styles.buttonIconContainer}>
      <Ionicons name={icon} size={20} color={COLORS.textColor} />
    </View>
    <Text style={styles.buttonText}>{title}</Text>
    <Ionicons name="chevron-forward" size={20} color={COLORS.sectionTitleColor} />
  </TouchableOpacity>
);

// Logout Button Component
const LogoutButton = () => (
  <TouchableOpacity style={styles.logoutButton} onPress={() => console.log("[DevTools] Logout button pressed")}>
    <Ionicons name="log-out-outline" size={18} color={COLORS.logoutButtonTextColor} style={{ marginRight: 8 }} />
    <Text style={styles.logoutText}>Sign Out</Text>
  </TouchableOpacity>
);

// ProfileScreen Component
const ProfileScreen = () => {
  console.log("[DevTools] ProfileScreen rendered");
  console.log("[DevTools] Profile Data:", profileData);
  console.log("[DevTools] Action Buttons:", actionButtons);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <ProfileHeader name={profileData.name} email={profileData.email} avatar={profileData.avatar} />

      <Text style={styles.sectionTitle}>Account Options</Text>
      <View style={styles.actionsContainer}>
        {actionButtons.map((item) => {
          console.log(`[DevTools] Rendering Action Button: ${item.title}`);
          return <ActionButton key={item.id} title={item.title} icon={item.icon} />;
        })}
      </View>

      <LogoutButton />
    </ScrollView>
  );
};

// Styles (organized separately)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBackground,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: SPACING.verticalPadding,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
    backgroundColor: COLORS.secondaryBackground,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: COLORS.accentColor,
    marginBottom: 16,
  },
  name: {
    ...FONTS.title,
    color: COLORS.textColor,
    marginBottom: 6,
  },
  _email: {
    ...FONTS.body,
    color: COLORS.subtitleTextColor,
  },
  get email() {
    return this._email;
  },
  set email(value) {
    this._email = value;
  },
  sectionTitle: {
    ...FONTS.subtitle,
    color: COLORS.sectionTitleColor,
    paddingHorizontal: SPACING.horizontalPadding,
    paddingTop: SPACING.sectionPadding,
    paddingBottom: 10,
  },
  actionsContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#101010',
    borderRadius: 12,
    marginHorizontal: 16,
    paddingBottom: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.actionButtonPadding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.actionButtonBorder,
  },
  buttonIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.actionButtonBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  buttonText: {
    flex: 1,
    ...FONTS.buttonText,
    color: COLORS.textColor,
  },
  logoutButton: {
    marginTop: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.logoutButtonPadding,
    paddingHorizontal: 32,
    borderWidth: 1,
    borderColor: COLORS.logoutButtonBorderColor,
    borderRadius: 24,
    backgroundColor: COLORS.logoutButtonBackground,
  },
  logoutText: {
    ...FONTS.logoutText,
    color: COLORS.logoutButtonTextColor,
  },
});

export default ProfileScreen;
