import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../components/AppTextInput';
import AppErrorMessage from '../components/AppErrorMessage';

function AppFormField({ name, ...otherProps }) {
  const { errors, handleChange, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
