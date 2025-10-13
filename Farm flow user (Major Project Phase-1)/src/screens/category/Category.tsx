// Category.tsx
import React from 'react';
import { CategoryUI } from './CategoryUI';
import { useCategoryLogic } from './CategoryLogic';

export default function Category() {
  const {
    selectedIndex,
    scrollViewRef,
    categoryRefs,
    handleCategoryLayout,
    scrollToCategory,
    handleScroll,
  } = useCategoryLogic();

  return (
    <CategoryUI
      selectedIndex={selectedIndex}
      scrollViewRef={scrollViewRef}
      categoryRefs={categoryRefs}
      handleCategoryLayout={handleCategoryLayout}
      scrollToCategory={scrollToCategory}
      handleScroll={handleScroll}
    />
  );
}
