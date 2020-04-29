import React, { useState } from 'react';
import { View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import PaginationDots from 'src/components/atoms/PaginationDots';

const PaginationSwiper = ({
  numOfPages,
  onSwipe,
  startPage,
  children
}) => {
  const [page, setPage] = useState(startPage || 0);

  const onSwipeLeft = () => {
    const newPageIndex = page+1;
    const index = newPageIndex >= numOfPages ? 0 : newPageIndex;
    setPage(index);
    onSwipe(page);
  };

  const onSwipeRight = () => {
    const newPageIndex = page-1;
    const index = newPageIndex < 0 ? numOfPages-1 : newPageIndex;
    setPage(index);
    onSwipe(page);
  };

  return <View>
    <GestureRecognizer
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
    >
      <PaginationDots
        length={numOfPages}
        active={page}
      />
      {children}
    </GestureRecognizer>
  </View>
};

export default PaginationSwiper;
