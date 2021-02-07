import React from 'react';
import { useFormikContext } from 'formik';

import CustomButton from './CustomButton';

function CustomSubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <CustomButton title={title} onPress={handleSubmit} />;
}

export default CustomSubmitButton;
