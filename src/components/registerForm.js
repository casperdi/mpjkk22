// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import {useUser} from '../hooks/ApiHooks';
import useForm from '../hooks/formHooks';
import {Grid} from '@mui/material';
import {Typography} from '@mui/material';
import {Button} from '@mui/material';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {useEffect} from 'react';

const RegisterForm = (props) => {
  const alkuarvot = {
    username: '',
    password: '',
    confirm: '',
    email: '',
    full_name: '',
  };

  const validators = {
    username: ['required', 'minStringLength: 3', 'isAvailable'],
    password: ['required', 'minStringLength: 5'],
    confirm: ['required', 'isPasswordMatch'],
    email: ['required', 'isEmail'],
  };

  const errorMessages = {
    username: [
      'required field',
      'minimum 3 characters',
      'usename not available',
    ],
    password: ['required field', 'minimum 5 characters'],
    confirm: ['required field', 'passwords do not match'],
    email: ['required field', 'not email address'],
  };

  const {postUser, getUsername} = useUser();

  const doRegister = async () => {
    console.log('doRegister');
    try {
      const checkUser = getUsername(inputs.username);
      if (checkUser) {
        delete inputs.confirm;
        const userData = await postUser(inputs);
        console.log(userData);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    alkuarvot
  );

  useEffect(() => {
    ValidatorForm.addValidationRule('isAvailable', async (value) => {
      try {
        return await getUsername(value);
      } catch (err) {
        return true;
      }
    });

    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      /*
      if (value !== inputs.password) {
        return false;
      }
      return true;
      */
      console.log('validator', value, inputs.password);
      return value === inputs.password ? true : false;
    });

    return () => {
      ValidatorForm.removeValidationRule('isAvailable');
    };
  }, [inputs]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography component="h1" variant="h2" gutterBottom>
          Register
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <ValidatorForm onSubmit={handleSubmit}>
          <TextValidator
            fullWidth
            placeholder="username"
            label="username"
            name="username"
            onChange={handleInputChange}
            value={inputs.username}
            validators={validators.username}
            errorMessages={errorMessages.username}
          />
          <TextValidator
            fullWidth
            label="password"
            placeholder="password"
            name="password"
            type="password"
            onChange={handleInputChange}
            value={inputs.password}
            validators={validators.password}
            errorMessages={errorMessages.password}
          />
          <TextValidator
            fullWidth
            label="re-type password"
            placeholder="re-type password"
            name="confirm"
            type="confirm"
            onChange={handleInputChange}
            value={inputs.confirm}
            validators={validators.confirm}
            errorMessages={errorMessages.confirm}
          />
          <TextValidator
            fullWidth
            label="email"
            placeholder="email"
            name="email"
            type="email"
            onChange={handleInputChange}
            value={inputs.email}
            validators={validators.email}
            errorMessages={errorMessages.email}
          />
          <TextValidator
            fullWidth
            label="full name"
            placeholder="full name"
            name="full_name"
            onChange={handleInputChange}
            value={inputs.full_name}
          />
          <Button fullWidth color="primary" type="submit" variant="contained">
            Register
          </Button>
        </ValidatorForm>
      </Grid>
    </Grid>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
