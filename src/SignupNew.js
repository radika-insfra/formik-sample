import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Grid, Typography, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const SignupForm = () => {
  return (
    <div>
      <Typography variant='h4' align='center' gutterBottom>
        Signup
      </Typography>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          address: '',
          phone: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('First name is required'),
          lastName: Yup.string().required('Last name is required'),
          email: Yup.string().email('Invalid email address').required('Email is required'),
          password: Yup.string()
            .required('Password is required')
            .min(8, 'Password is too short - should be 8 characters or longer')
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
            ),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
          address: Yup.string().required('Address is required'),
          phone: Yup.string()
            .matches(/^\+?\d{10,14}$/, 'Invalid phone number')
            .required('Phone number is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={touched.firstName && !!errors.firstName}>
                  <InputLabel htmlFor='firstName'>First Name</InputLabel>
                  <Field as={Input} id='firstName' name='firstName' variant='outlined' />
                  <FormHelperText>
                    <ErrorMessage name='firstName' />
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={touched.lastName && !!errors.lastName}>
                  <InputLabel htmlFor='lastName'>Last Name</InputLabel>
                  <Field as={Input} id='lastName' name='lastName' variant='outlined' />
                  <FormHelperText>
                    <ErrorMessage name='lastName' />{' '}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth error={touched.email && !!errors.email}>
                  <InputLabel htmlFor='email'>Email</InputLabel>
                  <Field as={Input} id='email' name='email' type='email' variant='outlined' />
                  <FormHelperText>
                    <ErrorMessage name='email' />
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth error={touched.password && !!errors.password}>
                  <InputLabel htmlFor='password'>Password</InputLabel>
                  <Field as={Input} id='password' name='password' type='password' variant='outlined' />
                  <FormHelperText>
                    <ErrorMessage name='password' />
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth error={touched.confirmPassword && !!errors.confirmPassword}>
                  <InputLabel htmlFor='confirmPassword'>Confirm Password</InputLabel>
                  <Field as={Input} id='confirmPassword' name='confirmPassword' type='password' variant='outlined' />
                  <FormHelperText>
                    <ErrorMessage name='confirmPassword' />
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth error={touched.address && !!errors.address}>
                  <InputLabel htmlFor='address'>Address</InputLabel>
                  <Field as={Input} id='address' name='address' variant='outlined' />
                  <FormHelperText>
                    <ErrorMessage name='address' />
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth error={touched.phone && !!errors.phone}>
                  <InputLabel htmlFor='phone'>Phone</InputLabel>
                  <Field as={Input} id='phone' name='phone' variant='outlined' />
                  <FormHelperText>
                    <ErrorMessage name='phone' />
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button variant='contained' color='primary' type='submit' disabled={isSubmitting}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;

/* 

Abc123$%
P@ssw0rd!
H3ll0_World#

*/
