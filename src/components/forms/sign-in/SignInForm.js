import { useForm } from 'react-hook-form';
import Button from '../../shared/Buttton';
import Input from '../../shared/Input';

const SignInFomrm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="col-6">
      <h2>Sign in form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Example label
          </label>
          <Input
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
          <Input
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
