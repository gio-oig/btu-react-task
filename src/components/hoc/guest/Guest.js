import { useEffect } from 'react';
import { Redirect } from 'react-router';

export const Guest = (Component) => {
  const WithNoAuth = (props) => {
    useEffect(() => {
      console.log('access secured page');
    }, []);

    const token = JSON.parse(localStorage.getItem('auth_token'));
    if (token) {
      return <Redirect to="/home" />;
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  };

  return WithNoAuth;
};

export default Guest;
