// CategoryLogic.ts
import { useState, useRef } from 'react';
import { NativeSyntheticEvent, NativeScrollEvent, LayoutChangeEvent, ScrollView } from 'react-native';
import { categoryData } from './categoryData';

export type SectionLayout = { top: number; bottom: number };

export function useCategoryLogic() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const categoryRefs = useRef<Array<any>>([]);
  const [categoryLayouts, setCategoryLayouts] = useState<SectionLayout[]>([]);

  const handleCategoryLayout = (idx: number) => (event: LayoutChangeEvent) => {
    const { y, height } = event.nativeEvent.layout;
    setCategoryLayouts(prev => {
      const next = [...prev];
      next[idx] = { top: y, bottom: y + height };
      return next;
    });
  };

  const scrollToCategory = (idx: number) => {
    if (idx === categoryData.length - 1 && scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
      setSelectedIndex(idx);
      return;
    }
    const layout = categoryLayouts[idx];
    if (layout && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: layout.top, animated: true });
      setSelectedIndex(idx);
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const contentHeight = event.nativeEvent.contentSize.height;
    const layoutHeight = event.nativeEvent.layoutMeasurement.height;

    if (scrollY + layoutHeight >= contentHeight - 20) {
      if (selectedIndex !== categoryData.length - 1) {
        setSelectedIndex(categoryData.length - 1);
      }
      return;
    }

    for (let i = 0; i < categoryLayouts.length - 1; i++) {
      const layout = categoryLayouts[i];
      if (layout && scrollY >= layout.top - 10 && scrollY < layout.bottom - 10) {
        if (selectedIndex !== i) setSelectedIndex(i);
        return;
      }
    }
  };

  return {
    selectedIndex,
    setSelectedIndex,
    scrollViewRef,
    categoryRefs,
    categoryLayouts,
    setCategoryLayouts,
    handleCategoryLayout,
    scrollToCategory,
    handleScroll,
  };
}
