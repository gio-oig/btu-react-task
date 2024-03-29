import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUser } from '../../../redux/actions/auth-actions';
import Button from '../../shared/Buttton';

const SignInFomrm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const history = useHistory();

  const onSubmit = async (form) => {
    dispatch(loginUser(form));
    console.log('in');
  };

  useEffect(() => {
    if (user) {
      history.replace('/home');
    }
    console.log(user);
  }, [user]);

  useEffect(() => {
    console.log(history);
  }, [history.location]);

  return (
    <div className="col-6">
      <h2>Sign in form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            defaultValue="eve.holt@reqres.in"
            placeholder="Example input placeholder"
            {...register('email', { required: true })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue="cityslicka"
            placeholder="Example input placeholder"
            {...register('password', { required: true })}
          />
        </div>
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignInFomrm;
