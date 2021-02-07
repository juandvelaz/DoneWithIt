import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import CustomForm from '../components/CustomForm';
import CustomFormField from '../components/CustomFormField';
import CustomScreen from '../components/CustomScreen';
import CustomSubmitButton from '../components/CustomSubmitButton';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen() {
  return (
    <CustomScreen style={styles.container}>
      <CustomForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <CustomFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <CustomFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <CustomFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <CustomSubmitButton title="Register" />
      </CustomForm>
    </CustomScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
