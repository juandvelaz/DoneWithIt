import React from 'react';
import { useFormikContext } from 'formik';

import CustomPicker from './CustomPicker';
import CustomErrorMessage from './CustomErrorMessage';

function CustomFormPicker({ items, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <CustomPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <CustomErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default CustomFormPicker;
