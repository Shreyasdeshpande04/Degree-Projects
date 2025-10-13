// ChangeAddressScreen.tsx
import React from 'react';
import ChangeAddressUI from './ChangeAddressUI';
import { useChangeAddressLogic } from './ChangeAddressLogic';

const ChangeAddressScreen = () => {
  const {
    name,
    setName,
    address,
    setAddress,
    handleSave,
  } = useChangeAddressLogic();

  return (
    <ChangeAddressUI
      name={name}
      setName={setName}
      address={address}
      setAddress={setAddress}
      handleSave={handleSave}
    />
  );
};

export default ChangeAddressScreen;
