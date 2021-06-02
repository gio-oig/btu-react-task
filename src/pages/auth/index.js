import { Guest } from '../../components/hoc';
import SignInPage from './sign-in';

const AuthPage = () => {
  return (
    <div className="container">
      <SignInPage />
    </div>
  );
};

export default Guest(AuthPage);
