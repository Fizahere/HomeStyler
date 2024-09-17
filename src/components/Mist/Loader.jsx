import React from 'react';
import { CircularProgress } from '@chakra-ui/react';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress isIndeterminate color="blue.500" size="60px" thickness="4px" />
    </div>
  );
};

export default Loader;
