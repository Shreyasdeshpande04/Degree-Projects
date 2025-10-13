// HomeScreen.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import HomeScreenUI from "./HomeScreenUI";
import { useHomeScreenLogic } from "./HomeScreenLogic";

const HomeScreen = () => {
  console.log("[DevTools] HomeScreen rendered"); // ✅ DevTools debug log
  const username = useSelector((state: RootState) => state.auth.username);

  const {
    insets,
    items,
    loading,
    refreshing,
    gradientOpacity,
    loadMoreItems,
    onRefresh,
    handleScroll,
  } = useHomeScreenLogic();

  return (
    <HomeScreenUI
      insets={insets}
      items={items}
      loading={loading}
      refreshing={refreshing}
      gradientOpacity={gradientOpacity}
      loadMoreItems={loadMoreItems}
      onRefresh={onRefresh}
      handleScroll={handleScroll}
    />
  );
};

export default HomeScreen;
