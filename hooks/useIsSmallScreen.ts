import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const useIsSmallScreen = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return matches;
}

export default useIsSmallScreen;
