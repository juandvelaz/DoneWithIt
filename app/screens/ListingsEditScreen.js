import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import CustomScreen from '../components/CustomScreen';
import CustomForm from '../components/CustomForm';
import CustomFormField from '../components/CustomFormField';
import CustomFormPicker from '../components/CustomFormPicker';
import CustomSubmitButton from '../components/CustomSubmitButton';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Camera', value: 3 },
];

function ListingEditScreen() {
  return (
    <CustomScreen style={styles.container}>
      <CustomForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <CustomFormField maxLength={255} name="title" placeholder="Title" />
        <CustomFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <CustomFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <CustomFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <CustomSubmitButton title="Post" />
      </CustomForm>
    </CustomScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
