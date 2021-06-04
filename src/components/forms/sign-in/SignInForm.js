import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/actions/auth-actions';
import Button from '../../shared/Buttton';

const SignInFomrm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (form) => {
    dispatch(loginUser(form));
  };

  return (
    <div className="col-6">
      <h2>Sign in form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Example label
          </label>
          <input
            type="email"
            class="form-control"
            defaultValue="eve.holt@reqres.in"
            placeholder="Example input placeholder"
            {...register('email', { required: true })}
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Another label
          </label>
          <input
            type="text"
            class="form-control"
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
