// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import useForm from '../hooks/formHooks';
import {useUser} from '../hooks/ApiHooks';
const registerForm = (props) => {
  const alkuarvot = {
    username: '',
    password: '',
    email: '',
    full_name: '',
  };

  const {postUser} = useUser();

  const doRegister = async () => {
    console.log('skrrrt');
    try {
      const userData = await postUser(inputs);
      console.log(userData);
    } catch (error) {
      alert(error.message);
    }
  };
  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    alkuarvot
  );
  console.log(inputs);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          name="username"
          onChange={handleInputChange}
          value={inputs.username}
        />
        <input
          placeholder="password"
          name="password"
          type="password"
          onChange={handleInputChange}
          value={inputs.password}
        />
        <input
          placeholder="email"
          name="email"
          type="email"
          onChange={handleInputChange}
          value={inputs.email}
        />
        <input
          placeholder="fullname"
          name="full_name"
          onChange={handleInputChange}
          value={inputs.full_name}
        />
        <input type="submit" value="register" />
      </form>
    </>
  );
};

registerForm.propTypes = {};

export default registerForm;
