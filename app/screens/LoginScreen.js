import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import CustomScreen from '../components/CustomScreen';
import CustomFormField from '../components/CustomFormField';
import CustomSubmitButton from '../components/CustomSubmitButton';
import CustomForm from '../components/CustomForm';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
  return (
    <CustomScreen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <CustomForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <CustomFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          TextContentType="emailAddress"
        />
        <CustomFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          TextContentType="password"
        />
        <CustomSubmitButton title="Login" />
      </CustomForm>
    </CustomScreen>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
