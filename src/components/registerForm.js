// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import useForm from '../hooks/formHooks';
const registerForm = (props) => {
  const {inputs, handleInputChange} = useForm();
  console.log(inputs);
  return (
    <>
      <form>
        <input
          placeholder="username"
          name="username"
          onChange={handleInputChange}
        />
        <input
          placeholder="password"
          name="password"
          type="password"
          onChange={handleInputChange}
        />
        <input
          placeholder="email"
          name="email"
          type="email"
          onChange={handleInputChange}
        />
        <input
          placeholder="fullname"
          name="full_name"
          onChange={handleInputChange}
        />
        <input type="submit" value="register" />
      </form>
    </>
  );
};

registerForm.propTypes = {};

export default registerForm;
