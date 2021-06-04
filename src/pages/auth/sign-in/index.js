import { Guest } from '../../../components/hoc';
import SignInFomrm from '../../../components/forms/sign-in';

const SignInPage = () => {
  return (
    <div className="row justify-content-center">
      <SignInFomrm />
    </div>
  );
};

export default Guest(SignInPage);
