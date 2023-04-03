import useMediaQuery from '@mui/material/useMediaQuery';

const useIsSmallScreen = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return matches;
}

export default useIsSmallScreen;
